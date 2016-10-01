<?php
	include_once('conexion.php'); 
	$user=json_decode(file_get_contents('php://input')); // obtiene en formato json desde las cabezeras le objeto user

	$query = "select * from usuarios where username='".$user->username."' and passwd='".$user->passwd."'";
	$result = mysqli_query($link,$query);

	$rows = mysqli_num_rows($result);
	$arr = array();

	if ($rows > 0) {
		session_start();
		$_SESSION['uid']=uniqid('session_');
		$arr = array(
			"status" => 200,
			"session" => $_SESSION['uid']
			);
		//print $_SESSION['uid'];
		echo json_encode($arr);
	}
	else {
		$arr = array(
			"status" => 400,
			"session" => ''
			);
		echo json_encode($arr);
	}
?>	