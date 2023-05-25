# from flask import Flask, request, jsonify, make_response, session
# # from config import app, db
# from flask_sqlalchemy import SQLAlchemy
# # from datetime import datetime
# # from . import models 
# import sys
# sys.path.insert(0, '../../')
# from models import *

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# app.config['SECRET_KEY'] = "shh it's a secret"

# db = SQLAlchemy(app)

# @app.route('/check_session', methods=['GET'])
# def check_session():
#     if session.get('user_id'):
#         user = User.query.filter(User.id == session['user_id']).first()
#         return user.to_dict(), 200
#     return {'error': '401 Unauthorized'}, 401

# @app.route('/login', methods=['POST'])
# def login():
#     request_json = request.get_json()
#     email = request_json.get('email')
#     password = request_json.get('password')
#     user = User.query.filter(User.email == email).first()
#     if user:
#         if user.authenticate(password):
#             session['user_id'] = user.id
#             return user.to_dict(), 200
#     return {'error': '401 Unauthorized'}, 401

# @app.route('/logout', methods=['DELETE'])
# def logout():
#     if session.get('user_id'):
#         session['user_id'] = None
#         return {}, 204
#     return {'error': '401 Unauthorized'}, 401

# @app.route('/signup', methods=['POST'])
# def signup():
#     request_json = request.get_json()
#     new_user = User(
#         email = request_json.get('email'),
#         username = request_json.get('username'),
#         )
#     password = request_json.get('password')
#     new_user.password_hash = password
#     db.session.add(new_user)
#     db.session.commit()
#     session['user_id'] = new_user.id 
#     return new_user.to_dict()

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run()















