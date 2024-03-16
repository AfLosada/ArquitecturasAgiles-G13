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

  val getTokenScenario = scenario("Retrieve Token")
    .exec(http("Get Token")
      .get("http://localhost:5003/token")
      .check(jsonPath("$.token").find.saveAs("accesskey")))

  val registroUsuarios = scenario("Registro usuarios validos").feed(feeder)
    .exec(
      http("Get Token")
        .post("http://192.168.1.11:5001/token")
        .check(
          jsonPath("$.token")
          .find
          .saveAs("accesskey"))
    )
    .exec(
      http("post usuario valido")
      .post("http://192.168.1.11:5000/user-commands/users/register")
        .header("Authorization", session => s"Bearer ${session("accesskey").as[String]}")
        .body(StringBody("""
        {
          "correo":"correo${value1}@valido.com",
          "clave":"1"
        }
        """)
        ).asJson
      .check(status.is(200))
    )
    .pause(1)
  
    setUp(
      registroUsuarios.inject(constantUsersPerSec(2).during(10.seconds)))
      .throttle(
        reachRps(5).in(20.seconds),
        holdFor(5.seconds),
        jumpToRps(1),
        holdFor(60)
    )
}
