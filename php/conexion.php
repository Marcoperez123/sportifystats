<?php
	$servidor = "sportifydb1.cfcsw2cesdtx.us-east-2.rds.amazonaws.com";
	$usuario = "admin";
	$contraseña = "Lara1234";
	$base_de_datos = "sportifyBasededatos";

	// Conexión utilizando PDO
	try {
	    $pdo = new PDO("mysql:host=$servidor;dbname=$base_de_datos", $usuario, $contraseña);
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (PDOException $e) {
	    die("Error al conectar: " . $e->getMessage());
	}
?>
