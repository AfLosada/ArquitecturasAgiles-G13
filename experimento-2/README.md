# Experimento 2

A brief description of what this project does and who it's for.

## Servicio de registro, consulta y encolamiento

- [BD de usuarios ](#BdUsuarios)
- [Certificador](#Certificador)
- [Registro de Usuarios](#Registro)
- [Consulta de Usuario](#Consulta)
- [Encolamiento](#Encolamiento)

## BdUsuarios
- http://127.0.0.1:5000/user (POST) inserta el payload ({"correo":"usr2@gmail.com", "clave":"clave"}) en la BD, devuelve el usuario credo
- http://127.0.0.1:5000/user/id (GET): retorna el usuario segun id
- http://127.0.0.1:5000/users?correo=correo (GET) : retorna el usuario segun correo

## Certificador
- http://127.0.0.1:5001/token (GET): Devuelve un token para que el servicio de Registro se comunique con el de Consulta

## Registro
- http://127.0.0.1:5002/register (POST): Realiza una peticion para registrar los datos ({"correo":"usr@gmail.com", "clave":"clave"}), primero obtiene un certificado para consultar si existe el correo (servicio Consulta), luego coloca los datos en la cola de RabbitMQ

## Consulta
- http://127.0.0.1:5003/check/usr@gmail.com (GET): Realiza una peticion para verificar si el correo ya estra registrado, coloca esta peticion en un servicio encolamiento.

## Encolamiento
- Se hace a travez de la libreria Celery, ver los archivos app_queue.py del servicio de registro y consulta.

## Prueba
- Se hizo una prueba con las siguientes características:
    - Se solicita un token para poder hacer registros de usuario
    - Se hace 1 registro por segundo durante 20 segundos
    - Se hacen 5 registros por segundo durante 10 segundos
    - Se hacen 2 registros por segundo durante 20 segundos