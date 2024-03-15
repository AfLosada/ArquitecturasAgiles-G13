from flask import Flask, request, jsonify
from app_queue import register_user
import requests

app = Flask(__name__)
CONSULTA_SERVICE_URL = 'http://consulta_usuario:5003/user-queries/users/check'
CERTIFICADOR_SERVICE_URL = 'http://autenticador:5001/token'
  
@app.route('/')
def index():
  return 'OK'

@app.route('/user-commands/users/register', methods=['POST'])
def register():
  data = request.get_json()
  
  if 'correo' not in data or 'clave' not in data:
    return jsonify({'error': 'Datos invalidos'}), 400

  correo = data['correo']
  clave = data['clave']

  token = request.headers.get('Authorization')
  result = requests.get(CERTIFICADOR_SERVICE_URL, headers={'Authorization': token}).json()

  if 'error' in result:
    return jsonify({'error': 'No se puede registrar usuario. TOKEN NO VALIDO'}), 400
  
  result = register_user(correo, clave)
  return result
  

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)