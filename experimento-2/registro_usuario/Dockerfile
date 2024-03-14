#FROM python:3.8
#WORKDIR /app
#COPY requirements.txt requirements.txt
#RUN pip install -r requirements.txt
#COPY . .
#CMD ["python", "app.py"]
FROM ubuntu:18.04

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python3" ]

CMD [ "app.py" ]