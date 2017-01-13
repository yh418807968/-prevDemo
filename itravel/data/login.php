<?php
session_start();
header("Content-type:text/html;charset=utf-8");
$link = mysqli_connect('localhost','root','','login'); //链接数据库

if( $_GET["phone"]){
	$phone = $_GET["phone"];
}else{
	$username = $_GET['username'];
}

$password = $_GET['password'];


$sql_select = "select id,username,password from user where phone= $phone"; //从数据库查询信息

$query = mysqli_query($link,$sql_select);
$result = mysqli_fetch_assoc($query );

if($result){

   if($password!=$result['password']){

      echo "<script>alert('密码错误，请重新输入');location.href='reg.html'</script>";
      exit;
 
   }else {
   	$_SESSION['username']=$result['username'];
 $_SESSION['id']=$result['id'];
 echo "<script>alert('登录成功');location.href='reg.html'</script>";
     
    }
  }  
else{
 echo "<script>alert('您输入的用户名不存在');location.href='reg.html'</script>";
     exit;
 };
