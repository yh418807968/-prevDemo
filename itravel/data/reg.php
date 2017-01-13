<?php
session_start();
if(!isset($_POST['submit'])){
    exit('非法访问!');
}
header("Content-type:text/html;charset=utf-8");
$link = mysqli_connect('localhost','root','','login');
//mysqli_set_charset($link,'utf8'); //设定字符集
$phone = $_POST["phone"];
$username = $_POST['username'];
$password = $_POST['password'];


if(mysqli_query($link,"INSERT INTO user(phone,username,password) VALUES ('$phone','$username','$username')")){
	echo "aa";
};

?>
