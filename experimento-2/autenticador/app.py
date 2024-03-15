import datetime
import jwt
from flask import Flask, jsonify, request

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'grupo_17_secret_key'

@app.route('/token', methods=['POST'])
def generar_token():
    fecha_hora_actual = datetime.datetime.utcnow()
    expiracion = fecha_hora_actual + datetime.timedelta(hours=5)
    token = jwt.encode({'exp': expiracion}, key='grupo_17_secret_key', algorithm='HS256')
    return jsonify({'token': token}), 200

@app.route('/token', methods=['GET'])
def verificar_token():
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({'error': 'Token no proporcionado'}), 401
    try:
        payload = jwt.decode(token, key='grupo_17_secret_key', algorithms=['HS256'])
        expiracion = datetime.datetime.utcfromtimestamp(payload['exp'])
        diferencia_tiempo = expiracion - datetime.datetime.utcnow()
        if diferencia_tiempo.total_seconds() / 3600 < 5:
            return jsonify({'valido': True}), 200
        else:
            return jsonify({'error': 'Token expirado'}), 401
    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token expirado'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Token inválido'}), 401

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
