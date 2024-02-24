#!/bin/bash
# Server y puede ser remplazado por el nombre que desean adicionarle

LOG_FILE="registro.log"

while true; do

    if ping -c 1 $SERVER_X_NAME > /dev/null 2>&1; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Ejecutandose correctamente $SERVER_X_NAME"
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Ejecutandose correctamente $SERVER_X_NAME" >> $LOG_FILE
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reiniciando $SERVER_X_NAME"
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reiniciando $SERVER_X_NAME" >> $LOG_FILE
        docker restart $SERVER_X_NAME
    fi

    if ping -c 1 $SERVER_Y_NAME > /dev/null 2>&1; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Ejecutandose correctamente $SERVER_Y_NAME"
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Ejecutandose correctamente $SERVER_Y_NAME" >> $LOG_FILE
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reiniciando $SERVER_Y_NAME"
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reiniciando $SERVER_Y_NAME" >> $LOG_FILE
        docker restart $SERVER_Y_NAME
    fi

    sleep 2
done
