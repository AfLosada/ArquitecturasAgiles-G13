from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS
from vistas.user import VistaUsuario
from vistas.users import VistaUsuarios
from modelos import db

    
def create_flask_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app_context = app.app_context()
    app_context.push()
    add_urls(app)
    CORS(app, origins = '*')
    return app

def add_urls(app):
    api = Api(app)
    api.add_resource(VistaUsuario, '/user', '/user/<int:user_id>')
    api.add_resource(VistaUsuarios, '/users')

if __name__ == '__main__':
    app = create_flask_app()
    db.init_app(app)
    db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5004)
