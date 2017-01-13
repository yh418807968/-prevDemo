/*输入格式检测*/

// var mainReg= document.getElementById("mainReg");
var inputs = document.getElementsByTagName("input");
// var errorMsg=document.getElementsByClassName;
var errMsg = {"phone":"请输入正确的手机号码",
              "imgCodeInput":"图形验证码不能为空",
              "phoneCodeInput":"短信验证码不能为空",
               "username":"用户名不能为空",
               "password":"密码需为8-12为的数字或字母",
               "password_2":"密码不一致"};

for(var i= 0;i < inputs.length; i++){
	inputs[i].onblur = function(){
		//alert(this.id)
		checkInput(this);
	}
}
//检查输入格式
function checkInput(obj){
	var ID = obj.name;
	var value = obj.value.trim();
	var isTure = false;
	switch (ID){
		case "phone":
		    isTure = /^1[3|5|7|8|][0-9]{9}$/.test(value);
		    break;
		case "imgCodeInput":
		    isTure = !(value == "");
		    break;
		case "phoneCodeInput":
		    isTure = !(value == "");
		    break;
		case "username":
		    isTure = !(value == "");
		    break;	
		case "password":
		    isTure = /^[A-Za-z0-9]{8,12}$/.test(value);
		    break;
		case "password_2":
		    isTure = (value == inputs[ID="password"].value.trim());
		    break;
	}
	if(!isTure){
		// getNextElement(obj.nextSibling).innerHTML = errMsg[ID];
		// obj.parentNode.getElementsByClassName("errorMsg")[0].style.visibility="visible";
		 obj.parentNode.getElementsByClassName("errorMsg")[0].innerHTML = errMsg[ID];
		}else{
		// getNextElement(obj.nextSibling).innerHTML = "";
		// obj.parentNode.getElementsByClassName("errorMsg")[0].style.visibility="hidden";
		obj.parentNode.getElementsByClassName("errorMsg")[0].innerHTML = "";
	}
}



/**为“登录”按钮绑定事件监听**/
var loginUname = null;  //全局变量，当前登录的用户名
var loginUid = null;    //全局变量，当前登录的用户编号
$('#loginBtn').click(function(){
  var loginType = $("#loginType").attr("name");
  var phone = "";
  var username = "";
  var password = "";
  if(loginType ==="phone"){
  	 phone = $("#loginType").val();
  	 password = $("#password").val();
  }else{
  	 username = $("#loginType").val();
     password = $("#password").val();
  }
  //假数据测试
  // var data={
  //   code:1,
  //   result:{username:'',userId:''},
  //   msg:"密码错误"

  // };
  //     //console.log('开始处理响应消息');
  //     if(data.code <0){  //登录失败
  //       if(data.code === -1){//密码错误
  //         $("[name='password']~.errorMsg").show();
  //         $("[name='password']~.errorMsg").html(data.msg);
  //       }else if(data.code === -2){//用户不存在
  //         $("#loginType~.errorMsg").show();
  //         $("#loginType~.errorMsg").html(data.msg);
  //       }
  //     }else {           //登录成功
  //           $('#loginMask').hide();
  //           $('#loginPanel').hide();
  //       // $('#welcome').html('欢迎回来：'+data.uname);
  //       loginUname = data.result.username; //在全局范围保存登录用户名
  //       loginUid = data.result.userId;//在全局范围保存登录用户编号
  //       window.location.href = "homePage.html";//登录成功后跳转到首页
  //     }
   
 // 发起异步POST请求，行登录验证
  $.ajax({
    type: 'POST',
    url: 'data/login.php',
    data: {
    	loginType: loginType,
    	password: password
    },
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code <0){  //登录失败
      	if(data.code === -1){//密码错误
      		// $("[name='password']~.errorMsg").show();
      		$("[name='password']~.errorMsg").html(data.msg);
      	}else if(data.code === -2){//用户不存在
      		// $("#loginType~.errorMsg").show();
      		$("#loginType~.errorMsg").html(data.msg);
      	}
      }else {           //登录成功
            $('#loginMask').hide();
            $('#loginPanel').hide();
        // $('#welcome').html('欢迎回来：'+data.uname);
        loginUname = data.result.username; //在全局范围保存登录用户名
        loginUid = data.userId;//在全局范围保存登录用户编号
        window.location.href = "homePage.html";//登录成功后跳转到首页
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
  
// $.getJSON("js/test.json",function(data){
//     alert(data[0].msg);
// // 	if(data[0].code <0){  //登录失败
// // 	      	if(data[0].code === -1){//密码错误
// // 	      		// $("[name='password']~.errorMsg").show();
// // 	      		// $("[name='password']~.errorMsg").html(data[0].msg);
// // 	      	}else if(data[0].code === -2){//用户不存在
// //             alert(data[0].msg)
// // 	      		// $("#loginType~.errorMsg").show();
// // 	      		// $("#loginType~.errorMsg").html(data[0].msg);
// // 	      	}
// // 	      }else {           //登录成功
// // 	        // $('#loginMask').hide();
// // 	        // $('#loginPanel').hide();
// // 	        // $('#welcome').html('欢迎回来：'+data.uname);
// // 	        loginUname = data.username; //在全局范围保存登录用户名
// // 	        loginUid = data.userId;//在全局范围保存登录用户编号
// // 	        window.location.href = "homePage.html";//登录成功后跳转到首页
// // 	      }
// })
});  

/*为注册按钮绑定事件监听*/
$('#regBtn').click(function(){
	var $regPanel = $(".regPanel")
	var $phone = $("[name='phone']");
	var $username = $("[name='username']");
	var $password = $("[name='password']");
	var $imgCodeInput = $("[name='imgCodeInput']");
	var $phoneCodeInput = $("[name='phoneCodeInput']");
  // //假数据测试
  // var data={
  //   code:1,
  //   msg:"用户名已被注册"
  // };
  // if(data.code<0){  //登录失败
  //      if(data.code === -1){//用户名已被注册
  //        // $username.parent().find(".errorMsg").show();
  //        $username.parent().find(".errorMsg").html(data.msg);
  //      }else if(data.code === -2){//手机号已被注册
  //        // $phone.parent().find(".errorMsg").show();
  //        $phone.parent().find(".errorMsg").html(data.msg);
  //      }else if(data.code === -3){//图形验证码错误
  //        // $imgCodeInput.parent().find("errorMsg").show();
  //        $imgCodeInput.parent().find(".errorMsg").html(data.msg);
  //      }else if(data.code === -4){
  //        // $phoneCodeInput.parent().find(".errorMsg").show();
  //        $phoneCodeInput.parent().find(".errorMsg").html(data.msg);
  //      }
  //     }else {           //注册成功
  //       fnlogin();//注册成功后弹出登录框
  //     }


  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: '../data/reg.php',
    data: {
    	phone: $phone,
    	username:$username,
    	password: $password,
    	imgCodeInput:$imgCodeInput,
    	phoneCodeInput:$phoneCodeInput
    },
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code<0){  //登录失败
      	if(data.code === -1){//用户名已被注册
      		// $username.parent().find(".errorMsg").show();
      		$username.parent().find(".errorMsg").html(data.msg);
      	}else if(data.code === -2){//手机号已被注册
      		// $phone.parent().find(".errorMsg").show();
      		$phone.parent().find(".errorMsg").html(data.msg);
      	}else if(data.code === -3){//图形验证码错误
      		// $imgCodeInput.parent().find(".errorMsg").show();
      		$imgCodeInput.parent().find(".errorMsg").html(data.msg);
      	}else if(data.code === -4){
      		// $phoneCodeInput.parent().find(".errorMsg").show();
      		$phoneCodeInput.parent().find(".errorMsg").html(data.msg);
      	}
      }else {           //注册成功
        fnlogin();//注册成功后弹出登录框
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
 });   

/*为重置密码添加事件监听*/

$('#resetBtn').click(function(){
  var $resetPanel = $(".resetPanel")
  var $phone = $("[name='phone']");
  // var $username = $("[name='username']");
  var $password = $("[name='password']");
  var $imgCodeInput = $("[name='imgCodeInput']");
  var $phoneCodeInput = $("[name='phoneCodeInput']");
  // //假数据测试
  // var data={
  //   code:-2,
  //   msg:"该手机号用户不存在"
  // };
  // if(data.code<0){  //登录失败
  //       if(data.code === -2){//该手机号用户不存在
  //        // $phone.parent().find(".errorMsg").show();
  //        $phone.parent().find(".errorMsg").html(data.msg);
  //      }else if(data.code === -3){//图形验证码错误
  //        // $imgCodeInput.parent().find("errorMsg").show();
  //        $imgCodeInput.parent().find(".errorMsg").html(data.msg);
  //      }else if(data.code === -4){
  //        // $phoneCodeInput.parent().find(".errorMsg").show();
  //        $phoneCodeInput.parent().find(".errorMsg").html(data.msg);
  //      }
  //     }else {           //注册成功
  //       fnlogin();//注册成功后弹出登录框
  //     }


  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: '../data/reset.php',
    data: {
      phone: $phone,
      password: $password,
      imgCodeInput:$imgCodeInput,
      phoneCodeInput:$phoneCodeInput
    },
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code<0){  //重置失败
         if(data.code === -2){//该手机号用户不存在
          // $phone.parent().find(".errorMsg").show();
          $phone.parent().find(".errorMsg").html(data.msg);
        }else if(data.code === -3){//图形验证码错误
          // $imgCodeInput.parent().find(".errorMsg").show();
          $imgCodeInput.parent().find(".errorMsg").html(data.msg);
        }else if(data.code === -4){//短信验证码错误
          // $phoneCodeInput.parent().find(".errorMsg").show();
          $phoneCodeInput.parent().find(".errorMsg").html(data.msg);
        }
      }else {           //注册成功
        fnlogin();//注册成功后弹出登录框
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
 });

// //获得下一个元素节点
// function getNextElement(node){  
//     if(node.nodeType == 1){  
//         return node;  
//     }  
//     if(node.nextSibling){  
//         return getNextElement(node.nextSibling);  
//     }  
//     return null;  
// }
