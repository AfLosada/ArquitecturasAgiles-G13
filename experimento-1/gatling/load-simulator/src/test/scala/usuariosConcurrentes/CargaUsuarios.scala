package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import java.util.concurrent.ThreadLocalRandom

/**
 * This sample is based on our official tutorials:
 *
 *   - [[https://gatling.io/docs/gatling/tutorials/quickstart Gatling quickstart tutorial]]
 *   - [[https://gatling.io/docs/gatling/tutorials/advanced Gatling advanced tutorial]]
 */
class UsuariosConcurrentes extends Simulation {
  val httpConf = http
    .baseUrl("http://localhost:5000/user-commands/users/register") // Set your target base URL

  val feeder = Iterator.continually(Map(
    "value1" -> scala.util.Random.nextInt(1000) // Generate a random number for value2
  ))

  val registroUsuarios = scenario("Registro usuarios validos").feed(feeder) 
    .exec(http("POST Usuario Valido")
    .post("/user-commands/users/register")
    .body(StringBody("""
      {
        "correo":"correo${value1}@valido.com",
        "contrasena":"1"
      }
    """)).asJson
    .check(status.is(200))
    )
    .pause(1)
    

  val registroUsuariosMalos = scenario("Registro Errores").exec(http("POST Usuario Error")
    .post("/user-commands/users/register")
    .body(StringBody("""
      {
        "correo":"malo",
        "contrasena":"1"
      }
    """)).asJson
    .check(status.is(200))
    )
  
  setUp(
    registroUsuarios.inject(
      constantConcurrentUsers(1000).during(120)
      ),
    registroUsuariosMalos.inject(rampUsers(2).during(120))
  ).protocols(httpConf)
}
