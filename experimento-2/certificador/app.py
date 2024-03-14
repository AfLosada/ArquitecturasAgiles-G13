from flask import Flask, jsonify
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'grupo_17_secret_key'
jwt = JWTManager(app)

@app.route('/token')
def generate_token():
  token = create_access_token(identity="certificator")
  return jsonify(token=token)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)