<?php
require_once 'conexion.php';
$db = conectar();

header('Content-Type: application/json');

$sentencia = $db->query("SELECT archivo_mp3 FROM canciones LIMIT 1");
$cancion = $sentencia->fetch(PDO::FETCH_ASSOC);

// Le mandamos a JS un JSON
echo json_encode(["url" => $cancion['archivo_mp3']]);
?>






