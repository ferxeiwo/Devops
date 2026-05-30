<?php

$USUARIO = "postgres";
$PASSWORD = "1";
$HOST = "localhost";
$PUERTO = "5432";
$BASE_DATOS = "canciones";

function conectar() {
    global $HOST, $PUERTO, $BASE_DATOS, $USUARIO, $PASSWORD;
    try {
        $url = "pgsql:host=$HOST;port=$PUERTO;dbname=$BASE_DATOS";
        $engine = new PDO($url, $USUARIO, $PASSWORD);

        echo "Conectado correctamente";
        return $engine;

    } catch (Exception $e) {
        echo "Error en la conexión: " . $e->getMessage();
        return null;
    }
}

conectar();

?>