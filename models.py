import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash


database_name = "declensions"



database_path = 'postgres://nybdjjwozrjdsj:bc93017dfd6eb39dfed759051c231daac1e66f3452ee90110646e96f049806a1@ec2-35-174-122-153.compute-1.amazonaws.com:5432/df1daudstbmud3'

db = SQLAlchemy()


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()



class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(12), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    user_entry = db.relationship('Entry', backref='user', lazy='select')
    user_folder = db.relationship('Folder', backref='user', lazy='select')

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Folder(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    folder_name = db.Column(db.String(25))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Entry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    voc_folder = db.Column(db.String(25))

    czech_entry = db.Column(db.String(25))
    english_entry = db.Column(db.String(25))
    word_class = db.Column(db.String(25))

    noun_gender = db.Column(db.String(25))
    noun_nominative = db.Column(db.String(25))
    noun_genitive = db.Column(db.String(25))
    noun_dative = db.Column(db.String(25))
    noun_accusative = db.Column(db.String(25))
    noun_vocative = db.Column(db.String(25))
    noun_locative = db.Column(db.String(25))
    noun_instrumental = db.Column(db.String(25))

    noun_pl_nominative = db.Column(db.String(25))
    noun_pl_genitive = db.Column(db.String(25))
    noun_pl_dative = db.Column(db.String(25))
    noun_pl_accusative = db.Column(db.String(25))
    noun_pl_vocative = db.Column(db.String(25))
    noun_pl_locative = db.Column(db.String(25))
    noun_pl_instrumental = db.Column(db.String(25))

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

