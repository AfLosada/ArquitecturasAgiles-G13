from flask import Flask, request, jsonify
import requests
import os, signal
import re

app = Flask(__name__)

query_service_url = "http://consulta_usuario:5001/user-queries/users/check_user"
db_service_url = "http://db_usuario:5002/register"
regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

@app.route('/')
def index():
    return 'OK'

@app.route('/user-commands/users/register', methods=['POST'])
def register_user():
    user_data = request.json
    correo = user_data["correo"]

    if not re.fullmatch(regex, correo):
        os.kill(os.getpid(), signal.SIGINT)
        return jsonify({ "success": True, "message": "Server is shutting down..." })
    else:
        response = requests.post(query_service_url, json=user_data)
        print(response)

        if response.status_code == 200 and response.json()["can_register"]:
            #el correo no existe, registrar en la BD
            response = requests.post(db_service_url, json=user_data)
            return jsonify({"message": "Usuario registrado exitosamente"})
        else:
            return jsonify({"error": "No se puede registrar el usuario"}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
