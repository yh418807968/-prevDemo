/*注册*/
var container= document.getElementById("container");
var inputs = container.getElementsByTagName("input");
var errMsg = {"phone":"请输入正确的手机号码",
               "username":"用户名不能为空",
               "password":"密码为数字或字母",
               "pwdConfirm":"请确认与密码一致"};
 
for(var i= 0;i < inputs.length; i++){
	inputs[i].onblur = function(){
		//alert(this.id)
		checkInput(this);
	}
}
//检查输入格式
function checkInput(obj){
	var ID = obj.id;
	var value = obj.value.trim();
	var isTure = false;
	switch (ID){
		case "phone":
		    isTure = /^1[3|5|7|8|][0-9]{9}$/.test(value);
		    break;
		case "username":
		    isTure = !(value == "");
		    break;	
		case "password":
		    isTure = /^[A-Za-z0-9]+$/.test(value);
		    break;
		case "pwdConfirm":
		    isTure = (value == inputs[ID="password"].value.trim());
		    break;
	}
	if(!isTure){
		getNextElement(obj.nextSibling).innerHTML = errMsg[ID];
	}else{
		getNextElement(obj.nextSibling).innerHTML = "";
	}
}
//获得下一个元素节点
function getNextElement(node){  
    if(node.nodeType == 1){  
        return node;  
    }  
    if(node.nextSibling){  
        return getNextElement(node.nextSibling);  
    }  
    return null;  
}

/*登录*/
var loginMask = document.getElementById("loginMask");
var loginPanel = document.getElementById("loginPanel");
//var loginContent = document.getElementsByClassName("loginContent")[0];
var changeType = document.getElementsByClassName("changeType")[0];
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