
/*登录*/

var loginMask = document.getElementById("loginMask");
var loginPanel = document.getElementById("loginPanel");
//var loginContent = document.getElementsByClassName("loginContent")[0];
var changeType = document.getElementsByClassName("changeType")[0];
var login = document.getElementsByClassName("login");//获得所有登录链接
var closeBtn = document.getElementsByClassName("closeBtn")[0];//关闭按钮

Array.prototype.forEach.call(login,function(item,index,Array){
	item.onclick = function(){
		fnlogin();
	};
});
loginMask.onclick = function(){
	removeMask();
}
closeBtn.onclick = function(){
	removeMask();
}

function fnlogin(){
	loginMask.style.visibility ="visible";
	loginPanel.style.visibility ="visible";
}
function removeMask(){
    loginMask.style.visibility ="hidden";
	loginPanel.style.visibility ="hidden";
}
function fnChangeType(){
	var loginType = document.getElementById("loginType");
	loginType.parentNode.getElementsByClassName("errorMsg")[0].innerHTML = "";
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


