from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, SelectField, HiddenField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo, Length
from models import User






class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Sign In')

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    password2 = PasswordField('Repeat Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError("Please use a different username")

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError("Please use a different email address")


class VocabularyForm(FlaskForm):

    czech_entry = StringField('Czech', validators = [DataRequired()])
    english_entry = StringField('English', validators = [DataRequired()])
    word_class = SelectField('Class', choices=[('...'), ('Noun'), ('Adjective')])
    foldersHidden = HiddenField()

    noun_gender = SelectField('Gender', choices=[('...'), ('Masculine'), ('Feminine'), ('Neuter')])
    noun_nominative = StringField('Nominative')
    noun_genitive = StringField('Genitive')
    noun_dative = StringField('Dative')
    noun_accusative = StringField('Accusative')
    noun_vocative = StringField('Vocative')
    noun_locative = StringField('Locative')
    noun_instrumental = StringField('Instrumental')

    noun_pl_nominative = StringField('Nominative')
    noun_pl_genitive = StringField('Genitive')
    noun_pl_dative = StringField('Dative')
    noun_pl_accusative = StringField('Accusative')
    noun_pl_vocative = StringField('Vocative')
    noun_pl_locative = StringField('Locative')
    noun_pl_instrumental = StringField('Instrumental')

    submit = SubmitField('Save')
