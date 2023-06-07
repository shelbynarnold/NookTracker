from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from config import bcrypt, db
from sqlalchemy.orm import relationship

# post_tags = db.Table('post_tags',
#                     db.Column('post_id', db.Integer, db.ForeignKey('post.id'), primary_key=True),
#                     db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True)
#                     )

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ()

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False)
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

    def __repr__(self):
        return f"Item: {self.title}"
    
class List(db.Model, SerializerMixin):
    __tablename__ = "lists"

    serialize_rules = ()

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))

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
    img_url = db.Column(db.String)
    # tags = db.relationship('Tags', secondary=post_tags, backref=db.backref('posts'))

    def __repr__(self):
        return f"Post: {self.title}"


class Forum(db.Model, SerializerMixin):
    __tablename__ = "forums"

    serialize_rules = ()
    
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    type = db.Column(db.String)

    def __repr__(self):
        return f"Post: <{self.post_id}>"


# class Post_tags(db.Model, SerializerMixin):
#     __tablename__ = "post_tags"

#     serialize_rules = ()

#     id= db.Column(db.Integer, nullable=False, primary_key=True)
#     post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False, )
#     tag_id = db.Column(db.Integer, db.ForeignKey('tag.id'), nullable=False,)

class Tags(db.Model, SerializerMixin):
    __tablename__ = "tags"

    serialize_rules = ()

    id= db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable=False) 
    # posts = relationship('Post', secondary=post_tags, backref='Tags')   

    def __repr__(self):
        return f'<Tag "{self.name}">'