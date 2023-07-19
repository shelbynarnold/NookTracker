from flask import Flask, request, jsonify, make_response, session, flash
from config import app, db
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sys
sys.path.insert(0, '../../')
from models import *
CORS(app)

@app.route('/check_session', methods=['GET'])
def check_session():
    if session.get('user_id'):
        user = User.query.filter(User.id == session['user_id']).first()
        return user.to_dict(), 200
    return {'error': '401 Unauthorized'}, 401

@app.route('/login', methods=['POST'])
def login():
    request_json = request.get_json()
    username = request_json.get('username')
    password = request_json.get('password')
    user = User.query.filter(User.username == username).first()
    if user:
        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
    return {'error': 'Wrong password'}, 401

@app.route('/logout', methods=['DELETE'])
def logout():
    if session.get('user_id'):
        session['user_id'] = None
        return {}, 204
    return {'error': '401 Unauthorized'}, 401

@app.route('/signup', methods=['POST'])
def signup():
    request_json = request.get_json()
    new_user = User(
        email = request_json.get('email'),
        username = request_json.get('username'),
        )
    password = request_json.get('password')
    new_user.password_hashed = password
    db.session.add(new_user)
    db.session.commit()
    # session['user_id'] = new_user.id 
    return new_user.to_dict()


@app.route('/lists/fish', methods=['GET'])
def fish():

    fish = [fish.to_dict() for fish in Item.query.filter(Item.category == "fish")]

    response = make_response(
            jsonify(fish),
            200
        )
    return response 

@app.route('/lists/bugs', methods=['GET'])
def bug():

    bug = [bug.to_dict() for bug in Item.query.filter(Item.category == "bug")] 

    response = make_response(
        jsonify(bug),
        200
                             )    
    return response 

@app.route('/forum', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def posts():
        if request.method == 'GET':
            posts = []
            for post in Post.query.all():
                post_dict = post.to_dict()
                posts.append(post_dict)

            response = make_response(
                posts, 
                200
            )    
            return response 
        elif request.method == 'POST':
                request_json = request.get_json()
                new_post = Post(
                    title = request_json.get('title'),
                    content = request_json.get('content')
                )
                db.session.add(new_post)
                db.session.commit()
                response = make_response(
                new_post.to_dict(),
                201
                )    
                return response   
        elif request.method == 'PATCH':
             request_json = request.get_json()
             edit_post = Post(
                  title = request_json.patch('title'),
                  content = request_json.patch('content')
                  )
        db.session.add(edit_post)
        db.session.commit()
        response = make_response(
             edit_post.to_dict(),
             201
        )     
        return response       

@app.route('/list', methods=['GET', 'POST'])
def lists():
    if request.method == 'GET':
            lists = []
            for list in List.query.all():
                list_dict = list.to_dict()
                lists.append(list_dict)

            response = make_response(
                lists, 
                200
            )    
            return response
    elif request.method == 'POST':
        request_json = request.get_json()
        new_list = List(
            item_id = request_json.get('item_id'), 
            title = request_json.get('title')
        )    
        db.session.add(new_list)
        db.session.commit()  
        return new_list.to_dict()    

if __name__=="__main__":
    app.run(port=5000, debug=True)















