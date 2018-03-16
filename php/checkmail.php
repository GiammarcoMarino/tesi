<?php
require_once('init.php');
$email=$_POST["email"];
if (!eregi("^([a-z0-9.-])+@(([a-z0-9-])+.)+[a-z.]{2,6}$", trim($email)))
{  echo('{"status":"2"}');
   exit();
}

$db->where('Email',$email);
$db->get('utenti');
if($db->count>0){
	echo('{"status":"0"}');
	exit();
}
else{
	echo('{"status":"1"}');
	exit();
}

?>