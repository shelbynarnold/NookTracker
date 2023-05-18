from flask import Flask, request, make_response, jsonify, abort, session
from flask_resful import Resource
from werkzeug.exceptions import NotFound, Unauthorized
from flask_cors import CORS
from flask_migrate import Migrate
from config import app, db, api
from models import db, Item, List, Forum, Post, User

app = Flask(__name__)
app.config['SQLALCEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.debug = True

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.route("/")
def home():
    return "HOME"