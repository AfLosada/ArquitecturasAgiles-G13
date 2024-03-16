package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import java.util.concurrent.ThreadLocalRandom
import scala.concurrent.duration.DurationInt

/**
 * This sample is based on our official tutorials:
 *
 *   - [[https://gatling.io/docs/gatling/tutorials/quickstart Gatling quickstart tutorial]]
 *   - [[https://gatling.io/docs/gatling/tutorials/advanced Gatling advanced tutorial]]
 */
class UsuariosConcurrentes extends Simulation { // Set your target base URL


  val httpConfToken = http.baseUrl("http://localhost:5000/user-commands/users/register") // Set your target base URL

  val httpConfRegister = http.baseUrl("http://localhost:5000/user-commands/users/register") // Set your target base URL

  val feeder = Iterator.continually(Map(
    "value1" -> scala.util.Random.nextInt(1000) // Generate a random number for value2
  ))

  private var token = ""

  val getTokenScenario = scenario("Token")
    .exec(
      http("Get Token")
        .post("http://192.168.1.11:5001/token")
        .check(
          jsonPath("$..token")
          .find
          .saveAs("token"))
    ).exitHereIfFailed.exec { session => {
      token = session("token").as[String]
      session
    }
    }

  val registroUsuarios = scenario("Registro usuarios").feed(feeder)
    .exec(session => session.set("token", token))
    .exec(
      http("post usuario valido")
      .post("http://192.168.1.11:5000/user-commands/users/register")
        .header("Authorization", session => {
          val bearer = s"${session("token").as[String]}"
          bearer
        })
        .body(StringBody("""
        {
          "correo":"correo${value1}@valido.com",
          "clave":"1"
        }
        """)
        ).asJson
      .check( status.is(200),bodyString.saveAs("BODY"))
    )
    .pause(1)
  
    setUp(
      getTokenScenario.inject(constantUsersPerSec(1) during (1 seconds)),
      registroUsuarios.inject(
        nothingFor(5 seconds),
        constantUsersPerSec(1).during(30.seconds),
        constantUsersPerSec(5).during(10.seconds),
        constantUsersPerSec(2).during(30.seconds),
      )
    )
}
