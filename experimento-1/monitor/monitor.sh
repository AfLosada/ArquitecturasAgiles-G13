#!/bin/bash
# Server y puede ser remplazado por el nombre que desean adicionarle

while true; do

    if !docker inspect $SERVER_X_NAME > /dev/null 2>&1 && !docker ps -q -f $SERVER_X_NAME > /dev/null 2>&1; then
        docker restart $SERVER_X_NAME
    fi

    if !docker inspect $SERVER_Y_NAME > /dev/null 2>&1 && !docker ps -q -f $SERVER_Y_NAME > /dev/null 2>&1; then
        docker restart $SERVER_Y_NAME
    fi

    sleep 20
done
