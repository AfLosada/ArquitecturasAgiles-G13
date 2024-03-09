# app_query.py para el servicio de consulta

import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# Datos de usuarios (simulación de base de datos)
coreos_registrados = ["correo1@gmail.com", "correo2@gmail.com"]
db_service_url = "http://db_usuario:5002/users"

@app.route('/user-queries/users/check_user', methods=['POST'])
def check_user():
    data = request.json
    correo = data.get("correo")
    correos_registrados = requests.get(db_service_url).json()
    usuarios_con_correo_especifico = [usuario for usuario in correos_registrados if usuario["correo"] == correo]

    if len(usuarios_con_correo_especifico) > 0:
        return jsonify({"can_register": False, "message": "El usuario ya existe"})
    else:
        return jsonify({"can_register": True, "message": "El usuario puede ser registrado"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
