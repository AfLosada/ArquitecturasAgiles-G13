from flask import request, jsonify
from modelos import db, User, UserSchema
from flask_restful import Resource

user_schema = UserSchema()
class VistaUsuarios(Resource):
    def get(self):
      correo = request.args.get('correo')
      user = User.query.filter(User.correo == correo).first()
      return user_schema.dump(user)

