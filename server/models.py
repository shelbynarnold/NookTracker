from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password_hashed = db.Column(db.String, nullable=False)

    @hybrid_property
    def password_hashed(self):
        return self.password_hashed
    
    @password_hashed.setter
    def password_hashed(self, password):
        password_hashed = bcrypt.generate_password_hashed(password.encode('utf-8'))
        print(password_hashed)
        self.password_hashed = password_hashed.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hashed(self.password_hashed, password.encode("utf-8"))

    def __repr__(self):
        return f"User: {self.username}"

class Item(db.Model, SerializerMixin):
    __tablename__ = "items"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    time_available = db.Column(db.Integer, nullable=False)
    month_available = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"Item: {self.title}"
    
class List(db.Model, SerializerMixin):
    __tablename__ = "lists"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return f"List: {self.title} User: <{self.user_id}>"
    
class Post(db.Model, SerializerMixin):
    __tablename__ = "posts"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    title = db.Column(db.String, nullable=False)
    content = db.Coumn(db.String, nullable=False)

    def __repr__(self):
        return f"Post: {self.title}"


class Forum(db.Model, SerializerMixin):
    __tablename__ = "forums"

    serialize_rules = ()
    
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))

    def __repr__(self):
        return f"Post: <{self.post_id}>"
