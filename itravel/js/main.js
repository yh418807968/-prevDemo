
/*登录*/

var loginMask = document.getElementById("loginMask");
var loginPanel = document.getElementById("loginPanel");
//var loginContent = document.getElementsByClassName("loginContent")[0];
var changeType = document.getElementsByClassName("changeType")[0];
var login = document.getElementsByClassName("login");

Array.prototype.forEach.call(login,function(){
	this.onclick = Mask.login();
});
function login(){
	loginMask.style.visibility ="visible";
	loginPanel.style.visibility ="visible";
}
function removeMask(){
    loginMask.style.visibility ="hidden";
	loginPanel.style.visibility ="hidden";
}
function fnChangeType(){
	var loginType = document.getElementById("loginType");
	if(loginType.name === "phone"){
		loginType.name = "username";
		loginType.placeholder = "用户名";
		changeType.innerHTML = "使用手机号登录>";
	}else{
		loginType.name = "phone";
		loginType.placeholder = "手机号";
		changeType.innerHTML = "使用用户名登录>";
	}
}


