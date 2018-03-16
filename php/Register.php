<?php
require_once('init.php');
$info=$_POST;
$db->where('Email',$info['email']);
$db->get('utenti');
if($db->count>0){
	echo('{"status":"2"}');
	exit();
}
else{
	$db->insert('utenti',array(
	"Nome" => $info["nome"],
	"Cognome" => $info["cognome"],
	"Email" => $info["email"],
	"Password" => md5($info["password"]),
	"Data" => $info["data"],
	"Sesso" => $info["sesso"]
	));
	echo('{"status":"1"}');
	exit();
}
?>