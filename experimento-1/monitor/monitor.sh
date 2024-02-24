#!/bin/bash
# Server y puede ser remplazado por el nombre que desean adicionarle
SERVER_Y_CREATED=false

while true; do
    if ping -c 1 $SERVER_X_NAME > /dev/null 2>&1; then

        echo "El servidor X está respondiendo."

        if docker inspect server-y > /dev/null 2>&1 && docker ps -q -f name=server-y > /dev/null 2>&1; then
            echo "El servidor Y está respondiendo, pero x ahora está en línea."
            echo "Apagando el servidor Y..."
            docker restart server-y
            echo "Servidor Y reiniciado."
            SERVER_Y_CREATED=false
        else
            echo "El servidor Y se encuentra apagado o no existe."
        fi

    else

        if [ "$SERVER_Y_CREATED" = false ]; then
            docker restart $SERVER_X_NAME
            echo "Nuevo servidor Y creado y en ejecución porque el servidor X esta apagado."
            SERVER_Y_CREATED=true
        else
            echo "El servidor X no responde, pero el servidor Y ya fue creado y está en ejecución."
        fi  
    fi

    # Esperar 10 segundos antes de realizar el próximo ping
    sleep 20
done
