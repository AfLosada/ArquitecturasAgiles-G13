# Instrucciones

Correr el archivo load.sh. Esto correrá las pruebas de carga de Gatling que están en la carpeta `load-simulator`. Los resultados de las pruebas se guardarán en el archivo test-results. Para que las pruebas sean exitosas es necesario que la aplicación esté corriendo.

En el archivo [CargaUsuarios.scala](experimento-1\gatling\load-simulator\src\test\scala\usuariosConcurrentes\CargaUsuarios.scala) se encuentran los detalles de las pruebas. Hay urls y escenarios con diferentes tipos de carga.

Los nombres de los usuarios se obtienen de un feed que añade números del 1 al 1000.

Actualmente el escenario base es:

Si se quieren customizar las pruebas seguir la documentación de Gatling: [documentación](https://docs.gatling.io/reference/script/core/injection/). Con esto se puede cambiar el archivo .scala.

**1000 usuarios concurrentes** + **inserción de fallas de manera aleatoria**

# Requerimientos

Tener docker instalado en la máquina