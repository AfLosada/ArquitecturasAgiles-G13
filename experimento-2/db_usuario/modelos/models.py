from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    correo = db.Column(db.String(128), index=True, unique=True)
    clave = db.Column(db.String(32))

    #def __repr__(self):
        #return f'<User {self.correo}>'

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_relationships = True
        load_instance = True