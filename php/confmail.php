<?php
function conferma($email){
    if (eregi("^([a-z0-9.-])+@(([a-z0-9-])+.)+[a-z.]{2,6}$", trim($email)))
    {  echo('{"status":"0"}'); }else{  echo('{"status":"-1"}');  }

}
?>