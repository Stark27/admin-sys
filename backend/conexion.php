<?php
function conexion(){
    $link = mysqli_connect("localhost", "root", "root","adminsys-test");

    if (mysqli_connect_errno()) {
        printf("Falló la conexión: %s\n", mysqli_connect_error());
        exit();
    }
    return $link;
}
$link=conexion();
