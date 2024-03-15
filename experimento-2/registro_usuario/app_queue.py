from celery import Celery
import requests

app = Celery('tasks', broker='pyamqp://guest@localhost//')
DB_SERVICE_URL = 'http://db_usuario:5004/user'

@app.task
def register_user(correo, clave):
  datos = {"correo": correo, "clave": clave}
  result = requests.post(DB_SERVICE_URL, json=datos).json()
  return result

