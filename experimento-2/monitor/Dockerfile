FROM alpine:latest

RUN apk --no-cache add bash docker

COPY monitor.sh /monitor.sh
RUN chmod +x /monitor.sh

CMD ["/bin/bash", "/monitor.sh"]
