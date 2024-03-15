from flask import Flask, request, jsonify
from app_queue import check_user
from flask_jwt_extended import JWTManager, jwt_required

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'grupo_17_secret_key'
jwt = JWTManager(app)

@app.route('/')
def index():
  return 'OK'

@app.route('/user-queries/users/check/<string:user_correo>', methods=['GET'])
@jwt_required()
def check(user_correo):
  if not user_correo:
    return jsonify({'error': 'Datos invalidos'}), 400

  result = check_user(user_correo)
  if not result:
    return jsonify({'error': 'Usuario no encontrado'}), 404
  else:
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5003)