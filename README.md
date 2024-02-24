# SportApp - Servicio de Registro de Usuarios - Equipo 13

El propósito de este experimento es probar de la arquitectura diseñada para el servicio de registro de usuarios favoreciendo la disponibilidad, deteccion de falla, respuesta de la falla y enmascaramiento de la falla, desfavoreciendo el tiempo de respuesta, cohesión, Testeabilidad(Complejas). Se espera que en caso de que el servicio de registro de usuarios falle se activa un servicio de respaldo para el registro de usuarios, para esto se utiliza las herramientas: Docker, NGINX, Flask, python, JMeter y SQLite.

Este experimento esta relacionado con la [HU006](https://github.com/AfLosada/ArquitecturasAgiles-G13/issues/9),  que tiene como punto de sensibilidad la disponibilidad del servicio de registro de usuarios que tiene un alto grado de insertidumbre, para esto utilizaremos un estilo de arquitectura de microservicios.

Se utilizan las tacticas de Arquitectura:

* Monitor (Ping - Echo) : Detección de fallas de disponibilidad del servicio de registro de usuarios.

* CQRS : Separación de responsabilidades. La idea es tener diferentes servicios para consultas y para comandos. En este caso los comandos van al servicio de registro de usuarios y las consultas al servicio de consulta de usuarios.

* Redundancia Pasiva con Resincronización de Estado : Recuperación. Cuando se detecte un fallo en el registro de usuarios se creará una nueva instancia del microservicio de registro de usuarios que se encargará de recibir los llamados mientras se reinicia el servicio principal.

Listado de componentes (Microservicios).
| Microservicio | Proposito y comportamiento esperado | Tecnología Asociada |
|-|-|-|
| Registro de Usuarios | Maneja los comandos relacionados a la entidad de usuarios, en este caso su registro | Flask |
| Consulta de Usuarios | Maneja las consultas relacionadas a la entidad de usuarios. | Flask |
| API Gateway | Maneja la interacción con usuarios, enruta las conexiones al servicio que le corresponda. | NGINX |
| Monitor | Revisa si los microservicios, en este caso el de registro de usuarios, se encuentra vivo | Python/Bash |
| Base de Datos | Guarda los registros de usuarios y permite consultarlos. | SQLite |

# Arquitectura de despliegue:
![despliegue](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/b7070546-084a-4667-ad48-3a12b7c1ffed)


## Instalación

Los servicios de este ejemplo requieren de *flask*, *redis*, *docker* y *docker-compose*. Se debe clonar este repositorio y, en caso de usar Linux Ubuntu ejecutar el archivo install.sh para instalar las librerías y los servicios. Después de ejecutar el archivo se debe reiniciar la máquina virtual. Si usa un sistema operativo distinto, debe instalar las librerías requeridas de manera manual.

```
sh install.sh
```

## Ejecución

Para correr la aplicación se debe ejecutar el siguiente comando:


```
docker-compose up
```

O si prefiere correr la aplicación en background se debe ejecutar el siguiente comando:

```
docker-compose up -d
```



## Descripción de los servicios

Esta rama (main) muestra la comunicación entre servicios de manera asíncrona e implementa el patrón CQRS. Para la comunicación asíncrona se utiliza Redis como plataforma de mensajería.

El experimento implementa tres servicios:

#### Servicio de registro de usuarios

Al implemetar el patrón CQRS las operaciones que expone este servicio se implementan en dos partes:   comandos (api_commands.py) y consultas (api_queries.py). En el archivo api_comands se tienen las siguientes operaciones:

- Crear una nueva orden: Esta operación se implementa en la función OrderListResource a través del método post.

Se puede observar que una vez creada la orden se coloca en la cola el id de la orden para que esta sea procesada.

```python
# add to queue to process order
q.enqueue(process_order, new_order.id)
```

En el archivo api_queries se tienen las siguientes operaciones:

- Listar todas las órdenes: Esta operación se implementa en la función OrderListResource a través del método get.
- Consultar una orden específica: Esta operación se implementa en la función OrderResource a través del método get.

#### Servicio de consulta de usuarios

Al implemetar el patrón CQRS las operaciones que expone este servicio se implementan en dos partes:   comandos (api_commands.py) y consultas (api_queries.py). En el archivo api_comands se tienen las siguientes operaciones:

- Crear un nuevo producto: Esta operación se implementa en la función ProductListResource a través del método post.
- Modificar un producto: Esta operación se implementa en la función ProductResource a través del método put.

En el archivo api_queries se tienen las siguientes operaciones:

- Listar todos los productos: Esta operación se implementa en la función ProductListResource a través del método get.
- Consultar un producto específico: Esta operación se implementa en la función ProductResource a través del método get.

#### Base de datos

Al implemetar el patrón CQRS las operaciones que expone este servicio se implementan en dos partes:   comandos (api_commands.py) y consultas (api_queries.py). En el archivo api_comands se tienen las siguientes operaciones:

- Crear un nuevo usuario: Esta operación se implementa en la función UserListResource a través del método post.

En el archivo api_queries se tienen las siguientes operaciones:

- Listar todos los usuarios: Esta operación se implementa en la función UserListResource a través del método get.
- Consultar un usuario específico: Esta operación se implementa en la función UserResource a través del método get.

#### API Gateway

En este ejemplo se utiliza la configuración proxy del servidor Ngnix para implementar el componente API Gateway. Esta configuración permite que todas las solicitudes se hagan al servidor Ngnix y este redireccione al servicio correspondiente de acuerdo a la operación y ruta especificada en el url, por ejemplo http://localhost/api-commands/users:

```
server {
    listen 8080;
    location /user-commands/users {
        proxy_pass http://registro_usuario:5000;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
    }
    location /user-queries/users {
        proxy_pass http://consulta_usuario:5000;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
    }
    location /user-db/users {
        proxy_pass http://db_usuario:5000;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
    }
}
```

#### Comunicación síncrona

En esta rama, los servicios no tienen una copia de la estructura de la BD de los demás servicios por lo que se debe conectar a la Base de datos general para actualizarla o consultarla. A continuación se muestra el esquema descrito anteriormente para el servicio Productos:


* Registro de usuarios:
  
```python
@app.route('/user-commands/users/register', methods=['POST'])
def register_user():
    user_data = request.json
    correo = user_data["correo"]

    if not re.fullmatch(regex, correo):
        os.kill(os.getpid(), signal.SIGINT)
        return jsonify({ "success": True, "message": "Server is shutting down..." })
    else:
        response = requests.post(query_service_url, json=user_data)

        if response.status_code == 200 and response.json()["can_register"]:
            #el correo no existe, registrar en la BD
            response = requests.post(db_service_url, json=user_data)
            return jsonify({"message": "Usuario registrado exitosamente"})
        else:
            return jsonify({"error": "No se puede registrar el usuario"}), 400
```

* Consulta de usuarios:

```python
@app.route('/check_user', methods=['POST'])
def check_user():
    data = request.json
    correo = data.get("correo")

    if correo in coreos_registrados:
        return jsonify({"can_register": False, "message": "El usuario ya existe"})
    else:
        return jsonify({"can_register": True, "message": "El usuario puede ser registrado"})
```

* Base de datos:

```python
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
```

# Pruebas

Para la validacion de la hipotesis de la arquitectura de microservicios para el registro de usuarios se implementan pruebas de estres, validando la resistencia del servicio de registro de usuarios, la deteccion de la falla por nuestro monitor y la respuesta ante la falla. 

## Instalacion

## Ejecucion 


# Resultados de la arquitectura

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/c27371b0-246e-4d49-bb8f-bc19b0b16389)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/f466a70b-8bd0-42a9-8590-583301733296)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/6339595c-0f38-48eb-b365-12f0e33a24eb)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/4cc3e7d4-daaf-4b30-8784-6eed08897ac5)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/5fb6bd68-4c27-4522-b122-2e96466435dc)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/fad552f0-a119-4576-a162-42be557e05ef)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/d02541f2-0019-46fe-a228-7e2df579566a)

![image](https://github.com/AfLosada/ArquitecturasAgiles-G13/assets/142316997/a732916f-e58f-4abb-b1bc-9bf38843904d)





