from flask import request, jsonify
from modelos import db, User, UserSchema
from flask_restful import Resource

user_schema = UserSchema()
class VistaUsuario(Resource):
    def post(self):
        correo = request.json['correo']
        clave = request.json['clave']

        if not correo:
            return jsonify({'error': 'Datos incompletos'}), 400

        if not clave:
            return jsonify({'error': 'Datos incompletos'}), 400

        user = User(correo=correo, clave=clave)
        db.session.add(user)
        db.session.commit()

        return user_schema.dump(user), 201

    def get(self, user_id):
      user = User.query.filter(User.id == user_id).first()
      return user_schema.dump(user)