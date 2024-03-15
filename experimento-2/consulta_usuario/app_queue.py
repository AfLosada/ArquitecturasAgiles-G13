from celery import Celery
import requests

app = Celery('tasks', broker='pyamqp://guest@localhost//')
DB_SERVICE_URL = 'http://db_usuario:5004/users?correo='

@app.task
def check_user(user_correo):
  url = f'{DB_SERVICE_URL}{user_correo}'
  result = requests.get(url).json()
  return result

