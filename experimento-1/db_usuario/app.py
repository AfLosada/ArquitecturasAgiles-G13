from flask import Flask, jsonify, request
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

# Configuración de la base de datos con SQLAlchemy
DATABASE_URL = 'sqlite:///database.db'
engine = create_engine(DATABASE_URL)
Base = declarative_base(bind=engine)

# Definición del modelo de usuario
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    correo = Column(String)
    clave = Column(String)

# Crea todas las tablas definidas en el modelo
Base.metadata.create_all()

# Configuración de la sesión de SQLAlchemy
Session = sessionmaker(bind=engine)

# Persistir datos iniciales en la base de datos
def persist_initial_data():
    session = Session()

    # Verificar si ya existen usuarios en la base de datos
    existing_users = session.query(User).count()
    if existing_users > 0:
        return  # No es necesario persistir datos iniciales si ya existen usuarios

    # Insertar datos iniciales
    initial_users = [
        {'correo': 'user1@example.com', 'clave': 'password1'},
        {'correo': 'user2@example.com', 'clave': 'password2'}
    ]
    for data in initial_users:
        user = User(correo=data['correo'], clave=data['clave'])
        session.add(user)

    session.commit()
    session.close()

# Llamar a la función para persistir datos iniciales
persist_initial_data()

@app.route('/')
def index():
    return 'OK'

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    correo = data.get('correo')
    clave = data.get('clave')

    if not correo or not clave:
        return jsonify({'error': 'correo and clave are required'}), 400

    session = Session()
    user = User(correo=correo, clave=clave)
    session.add(user)
    session.commit()
    session.close()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/users', methods=['GET'])
def get_users():
    session = Session()
    users = session.query(User).all()
    session.close()

    users_list = []
    for user in users:
        users_list.append({'id': user.id, 'correo': user.correo, 'clave': user.clave})

    return jsonify(users_list)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)
