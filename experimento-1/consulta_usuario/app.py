# app_query.py para el servicio de consulta

from flask import Flask, request, jsonify

app = Flask(__name__)

# Datos de usuarios (simulación de base de datos)
coreos_registrados = ["correo1@gmail.com", "correo2@gmail.com"]

@app.route('/user-queries/users/check_user', methods=['POST'])
def check_user():
    data = request.json
    correo = data.get("correo")

    if correo in coreos_registrados:
        return jsonify({"can_register": False, "message": "El usuario ya existe"})
    else:
        return jsonify({"can_register": True, "message": "El usuario puede ser registrado"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
