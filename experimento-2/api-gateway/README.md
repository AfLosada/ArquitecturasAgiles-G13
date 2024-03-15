# Configuración de Rate Limit con NGINX

Este repositorio contiene la configuración de NGINX para implementar un límite de velocidad (rate limit) en un servicio de registro de usuarios, así como la configuración para dirigir las solicitudes a otros servicios relacionados.

## Requisitos

- NGINX instalado en el servidor
- Conocimiento básico de configuración de NGINX

## Configuración

1. **Definición de la zona de rate limit**: Se define una zona para el rate limit en el archivo de configuración de NGINX, donde se establece la velocidad de las solicitudes permitidas y el tamaño de la zona de almacenamiento.

2. **Mapa para determinar el retraso de respuesta**: Se utiliza un mapa en NGINX para determinar si se debe aplicar un retraso en la respuesta en caso de que se exceda el límite de velocidad. Si se recibe el código de estado 429 (demasiadas solicitudes), se establece un retraso en la respuesta.

3. **Configuración del servidor**: En la sección del servidor, se especifican las ubicaciones para los diferentes servicios relacionados con el registro de usuarios:
    - `/user-commands/users`: Para el servicio de registro de usuarios. Aquí se aplica el rate limit y se verifica si se debe aplicar un retraso en la respuesta en caso de exceder el límite de velocidad.
    - `/user-queries/users`: Para el servicio de consultas de usuarios.
    - `/users`: Para la base de datos de usuarios.

## Uso

1. Clona este repositorio en tu servidor NGINX.
2. Copia el contenido del archivo de configuración en el archivo de configuración de NGINX en tu servidor.
3. Reinicia NGINX para aplicar los cambios.
