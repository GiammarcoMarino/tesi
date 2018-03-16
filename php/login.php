<?php
require_once('init.php');
$info=$_POST;
$db->where('Email', $info['email']);
$db->where('Password',md5($info['password']));
$db->get('utenti');
if($db->count>0){
    echo('{"status":"1"}');
    exit();
}
else{
    echo('{"status":"0"}');
    exit();
}
?>