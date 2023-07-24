from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from config import bcrypt, db
from sqlalchemy.orm import relationship
from flask import Flask, render_template

post_tags = db.Table('post_tags',
                    db.Column('post_id', db.Integer, db.ForeignKey('posts.id')),
                    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id')), extend_existing=True)

# list_items = db.Table('list_items', 
#                       db.Column('list_id', db.Integer, db.ForeignKey('lists.id')),
#                       db.Column('item_id', db.Integer, db.ForeignKey('items.id')), extend_existing=True)

# user_list = db.Table('user_list', 
#                      db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
#                      db.Column,('list_id', db.Integer, db.ForeignKey('list.id')))

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ()

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False)
    # following = db.relationship('List', secondary=user_list, backref='followers')
    _password_hashed = db.Column(db.String)

    @hybrid_property
    def password_hashed(self):
        return self._password_hashed
    
    @password_hashed.setter
    def password_hashed(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        print(password_hash)
        self._password_hashed = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hashed, password.encode("utf-8"))

    def __repr__(self):
        return f"User: {self.username}"

class Item(db.Model, SerializerMixin):
    __tablename__ = "items"

    serialize_rules = ()

    category = db.Column(db.String)
    image = db.Column(db.String)
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    time_available = db.Column(db.Integer, nullable=False)
    month_available = db.Column(db.String, nullable=False)
    # lists= relationship('List', secondary=list_items, back_populates=('items'))

    def __repr__(self):
        return f"Item: {self.title}"
    
class List(db.Model, SerializerMixin):
    __tablename__ = "lists"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # items = relationship('Item', secondary=list_items, back_populates=('lists'))

    def __repr__(self):
        return f"List: {self.title} User: <{self.user_id}>"
    
class Post(db.Model, SerializerMixin):
    __tablename__ = "posts"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    forum_id = db.Column(db.Integer, db.ForeignKey("forums.id"))
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    img_url = db.Column(db.String)
    tags = db.relationship('Tag', secondary=post_tags, back_populates=('posts'))

    def __repr__(self):
        return f"Post: {self.title}"



class Forum(db.Model, SerializerMixin):
    __tablename__ = "forums"

    serialize_rules = ()
    
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    type = db.Column(db.String)

    def __repr__(self):
        return f"Post: <{self.post_id}>" 

class Tag(db.Model, SerializerMixin):
    __tablename__ = "tags"
    

    serialize_rules = ()

    id= db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable=False) 
    posts = relationship('Post', secondary=post_tags, back_populates=('tags'))   

    def __repr__(self):
        return f'<Tag "{self.name}">'
    
class List_Item(db.Model, SerializerMixin):
    __tablename__ = "list_items"

    serialize_rules = ()

    id = db.Column(db.Integer, primary_key=True)
    list_id = db.Column(db.Integer, db.ForeignKey("lists.id"))
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))

    def __repr__(self):
        return f"List: <{self.list_id}> Item: <{self.item_id}>"