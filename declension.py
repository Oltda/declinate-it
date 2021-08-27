from flask import Flask, render_template, redirect, url_for, flash, request
from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required

from scrap2 import Declinator

from models import setup_db, User, Folder, Entry, db
from forms import LoginForm, RegistrationForm, VocabularyForm




def create_app(test_config=None):
    app = Flask(__name__)
    setup_db(app)

    login = LoginManager(app)

    app.secret_key = "ytdytftyfjytfjytfjytf"

    login.login_view = 'login'
    app.jinja_env.add_extension('jinja2.ext.loopcontrols')


    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))



    @app.route('/home', methods=['GET', 'POST'])
    @login_required
    def index():
        form = VocabularyForm()

        user = current_user.username
        entry = Entry(czech_entry=form.czech_entry.data, english_entry=form.english_entry.data,

                        voc_folder=form.foldersHidden.data,
                        word_class=form.word_class.data, user_id=current_user.id,

                        noun_gender=form.noun_gender.data, noun_nominative=form.noun_nominative.data,
                        noun_genitive=form.noun_genitive.data, noun_dative=form.noun_dative.data,
                        noun_accusative=form.noun_accusative.data, noun_vocative=form.noun_vocative.data,
                        noun_locative=form.noun_locative.data, noun_instrumental=form.noun_instrumental.data,
                        noun_pl_nominative=form.noun_pl_nominative.data,
                        noun_pl_genitive=form.noun_pl_genitive.data, noun_pl_dative=form.noun_pl_dative.data,
                        noun_pl_accusative=form.noun_pl_accusative.data, noun_pl_vocative=form.noun_pl_vocative.data,
                        noun_pl_locative=form.noun_pl_locative.data, noun_pl_instrumental=form.noun_pl_instrumental.data,
                        )

        vocab = Entry.query.filter_by(user_id=current_user.id).all()

        all_user_folders = Folder.query.filter_by(user_id=current_user.id).all()

        list_of_declensions = []
        initial_entry = {"english":"", "czech":"", "druh":"", "rod":"", "slozka":""}


        if form.validate_on_submit():
            folder_hidden_inp = request.form['foldersHidden']
            word_class_select = request.form['word_class']
            noun_gender_select = request.form['noun_gender']

            if folder_hidden_inp == "..." or folder_hidden_inp == "":
                flash("Please choose a folder")
            elif word_class_select == "...":
                flash("Please choose a class")
            elif noun_gender_select == "...":
                flash("Please choose a gender")
            else:
                db.session.add(entry)
                db.session.commit()
                if word_class_select == "Noun":
                    flash("You have added a new noun")
                elif word_class_select == "Adjective":
                    flash("You have added a new adjective")
            return redirect(url_for('index'))


        word_info_list = []
        unordered_cz_en_list = []
        list_cz_voc = []


        for item in range(len(vocab)):

            item = {"entryCz":"", "entryEn":"", "word_class":"", "idNumber":"", "gender": "", "caseSubDict": {"nominative":"", "genitive":"", "dative":"",
                        "accusative": "", "vocative": "", "locative":"", "instrumental":""},
                        "caseSubDictPl": {"nominativePl":"", "genitivePl":"", "dativePl":"",
                        "accusativePl": "", "vocativePl": "", "locativePl":"", "instrumentalPl":""}}
            word_info_list.append(item)


        index = 0
        for element in vocab:

            word_info_list[index]["idNumber"] = element.id
            word_info_list[index]["entryCz"] = element.czech_entry.strip()
            word_info_list[index]["entryEn"] = element.english_entry.strip()
            word_info_list[index]["gender"] = element.noun_gender
            word_info_list[index]["word_class"] = element.word_class
            word_info_list[index]["caseSubDict"]["nominative"] = element.czech_entry.strip()
            word_info_list[index]["caseSubDict"]["genitive"] = element.noun_genitive.strip()
            word_info_list[index]["caseSubDict"]["dative"] = element.noun_dative.strip()
            word_info_list[index]["caseSubDict"]["accusative"] = element.noun_accusative.strip()
            word_info_list[index]["caseSubDict"]["vocative"] = element.noun_vocative.strip()
            word_info_list[index]["caseSubDict"]["locative"] = element.noun_locative.strip()
            word_info_list[index]["caseSubDict"]["instrumental"] = element.noun_instrumental.strip()

            word_info_list[index]["caseSubDictPl"]["nominativePl"] = element.noun_pl_nominative.strip()
            word_info_list[index]["caseSubDictPl"]["genitivePl"] = element.noun_pl_genitive.strip()
            word_info_list[index]["caseSubDictPl"]["dativePl"] = element.noun_pl_dative.strip()
            word_info_list[index]["caseSubDictPl"]["accusativePl"] = element.noun_pl_accusative.strip()
            word_info_list[index]["caseSubDictPl"]["vocativePl"] = element.noun_pl_vocative.strip()
            word_info_list[index]["caseSubDictPl"]["locativePl"] = element.noun_pl_locative.strip()
            word_info_list[index]["caseSubDictPl"]["instrumentalPl"] = element.noun_pl_instrumental.strip()


            index = index + 1

            list_cz_voc.append([element.czech_entry, element.english_entry])
            unordered_cz_en_list.append(element.czech_entry)
            unordered_cz_en_list.append(element.english_entry)


            list_cz_voc = sorted(list_cz_voc)


        if request.method == 'POST':


            if request.form['submit_decl'] == 'Declinate':


                aj_word = request.form['anglicky']
                slovni_druh = request.form['ChClass']
                gram_rod = request.form['ChGend']
                slozka = request.form['ChFolder']

                word_to_declinate = request.form['vyber']
                word = Declinator(word_to_declinate)
                list_of_declensions = word.get_declinations()

                initial_entry['english'] = aj_word
                initial_entry['czech'] = word_to_declinate
                initial_entry['druh'] = slovni_druh
                initial_entry['rod'] = gram_rod
                initial_entry['slozka'] = slozka
                return render_template('index.html', list_of_declensions=list_of_declensions, initial_entry=initial_entry, word_info_list=word_info_list, list_cz_voc=list_cz_voc, unordered_cz_en_list=unordered_cz_en_list, user=user, form=form, entry=entry, vocab=vocab, all_user_folders=all_user_folders)


            if request.form['submit_decl'] == 'Add folder':
                folder_to_add = request.form['slozka_jmeno']
                if bool(Folder.query.filter_by(folder_name=folder_to_add, user_id=current_user.id).first()) == True:
                    flash("Choose a different folder name")
                elif request.form['slozka_jmeno'] == "":
                    flash("Invalid folder name")
                else:
                    new_slozka = Folder(folder_name=folder_to_add, user_id=current_user.id)
                    db.session.add(new_slozka)
                    db.session.commit()

                return redirect(url_for('index'))

        return render_template('index.html', list_of_declensions=list_of_declensions, initial_entry=initial_entry, word_info_list=word_info_list, list_cz_voc=list_cz_voc, unordered_cz_en_list=unordered_cz_en_list, user=user, form=form, entry=entry, vocab=vocab, all_user_folders=all_user_folders)



    @app.route('/', methods=['GET', 'POST'])
    def login():
        if current_user.is_authenticated:
            return redirect(url_for('index'))
        form = LoginForm()
        if form.validate_on_submit():
            user = User.query.filter_by(username=form.username.data).first()
            if user is None or not user.check_password(form.password.data):
                flash('Wrong username or password')
                return redirect(url_for('login'))
            login_user(user, remember=form.remember_me.data)
            return redirect(url_for('index'))
        return render_template('login.html', form=form)


    @app.route('/logout')
    def logout():
        logout_user()
        return redirect(url_for('login'))


    @app.route('/register', methods=['GET', 'POST'])
    def register():
        form = RegistrationForm()
        if form.validate_on_submit():
            user = User(username=form.username.data, email=form.email.data)
            user.set_password(form.password.data)
            db.session.add(user)
            db.session.commit()
            return redirect(url_for('login'))
        return render_template('register.html', form=form)




    @app.route('/my-vocabulary/<folder>')
    @login_required
    def myvocab(folder):
        username = current_user.username
        all_user_folders = Folder.query.filter_by(user_id=current_user.id).all()

        vocab = Entry.query.filter_by(user_id=current_user.id).all()
        noun_dictionary = {"gender": "", "nominative":"", "genitive":"", "dative":"",
                            "accusative": "", "vocative": "", "locative":"", "instrumental":""}


        list_of_NounDictionaries = []
        list_of_VerbDictionaries = []
        list_cz_voc = []
        for item in vocab:
            if item.voc_folder == folder:
                list_cz_voc.append(item.id)
                item.id = {"word_class":"", "entryCz":"", "entryEn":"",  "gender": "", "caseSubDict": {"nominative":"", "genitive":"", "dative":"",
                            "accusative": "", "vocative": "", "locative":"", "instrumental":""},
                            "caseSubDictPl": {"nominativePl":"", "genitivePl":"", "dativePl":"",
                            "accusativePl": "", "vocativePl": "", "locativePl":"", "instrumentalPl":""}}


                item.id["entryCz"] = item.czech_entry.strip()
                item.id["entryEn"] = item.english_entry.strip()
                item.id["gender"] = item.noun_gender
                item.id["word_class"] = item.word_class


                item.id["caseSubDict"]["nominative"] = item.czech_entry.strip()
                item.id["caseSubDict"]["genitive"] = item.noun_genitive.strip()
                item.id["caseSubDict"]["dative"] = item.noun_dative.strip()
                item.id["caseSubDict"]["accusative"] = item.noun_accusative.strip()
                item.id["caseSubDict"]["vocative"] = item.noun_vocative.strip()
                item.id["caseSubDict"]["locative"] = item.noun_locative.strip()
                item.id["caseSubDict"]["instrumental"] = item.noun_instrumental.strip()



                item.id["caseSubDictPl"]["nominativePl"] = item.noun_pl_nominative.strip()
                item.id["caseSubDictPl"]["genitivePl"] = item.noun_pl_genitive.strip()
                item.id["caseSubDictPl"]["dativePl"] = item.noun_pl_dative.strip()
                item.id["caseSubDictPl"]["accusativePl"] = item.noun_pl_accusative.strip()
                item.id["caseSubDictPl"]["vocativePl"] = item.noun_pl_vocative.strip()
                item.id["caseSubDictPl"]["locativePl"] = item.noun_pl_locative.strip()
                item.id["caseSubDictPl"]["instrumentalPl"] = item.noun_pl_instrumental.strip()

                    #list_of_NounDictionaries.append(item.id)



                list_of_NounDictionaries.append(item.id)



        return render_template('myvocab.html', list_cz_voc=list_cz_voc, list_of_NounDictionaries=list_of_NounDictionaries,
                                 vocab=vocab, folder=folder, username=username,  all_user_folders=all_user_folders)



    @app.route('/delete/<id>')
    @login_required
    def delete(id):
        entry_to_delete = Entry.query.get_or_404(id)
        try:
            db.session.delete(entry_to_delete)
            db.session.commit()
            return redirect('/')
        except:
            return "There was a problem deleting the entry, try again."





    @app.route('/edit/<int:id>', methods=['GET', 'POST'])
    @login_required
    def edit(id):
        entry_to_edit = Entry.query.get_or_404(id)
        form = VocabularyForm()
        user = current_user.username
        all_user_folders = Folder.query.filter_by(user_id=current_user.id).all()
        dict_for_edit = {"czEntry": entry_to_edit.czech_entry, "wordClass": entry_to_edit.word_class, "wordGender": entry_to_edit.noun_gender, "vocFolder": entry_to_edit.voc_folder}

        #form.word_class.default = entry_to_edit.word_class

        if request.method == "POST":
            entry_to_edit.czech_entry = request.form['czech_entry']

            entry_to_edit.english_entry = request.form['english_entry']
            entry_to_edit.czech_entry = request.form['czech_entry']
            entry_to_edit.voc_folder = request.form['foldersHidden']

            entry_to_edit.word_class = request.form['word_class']
            entry_to_edit.noun_gender = request.form['noun_gender']
            entry_to_edit.czech_entry = request.form['czech_entry']
            entry_to_edit.czech_entry = request.form['czech_entry']
            entry_to_edit.czech_entry = request.form['czech_entry']

            entry_to_edit.noun_nominative = request.form['noun_nominative']
            entry_to_edit.noun_genitive = request.form['noun_genitive']
            entry_to_edit.noun_dative = request.form['noun_dative']
            entry_to_edit.noun_accusative = request.form['noun_accusative']
            entry_to_edit.noun_vocative = request.form['noun_vocative']
            entry_to_edit.noun_locative = request.form['noun_locative']
            entry_to_edit.noun_instrumental = request.form['noun_instrumental']

            entry_to_edit.noun_pl_nominative = request.form['noun_pl_nominative']
            entry_to_edit.noun_pl_genitive = request.form['noun_pl_genitive']
            entry_to_edit.noun_pl_dative = request.form['noun_pl_dative']
            entry_to_edit.noun_pl_accusative = request.form['noun_pl_accusative']
            entry_to_edit.noun_pl_vocative = request.form['noun_pl_vocative']
            entry_to_edit.noun_pl_locative = request.form['noun_pl_locative']
            entry_to_edit.noun_pl_instrumental = request.form['noun_pl_instrumental']

            db.session.commit()
            return redirect(url_for('index'))

        return render_template('edit.html', dict_for_edit=dict_for_edit, form=form, all_user_folders=all_user_folders, entry_to_edit=entry_to_edit)

    return app

app = create_app()

if __name__ == '__main__':
    app.run()