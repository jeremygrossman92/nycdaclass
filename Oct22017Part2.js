document.getElementsByTagName('h1')[0].innerHTML = "Hello World";

var submit = document.getElementById('submit');
	submit.onclick = function(){
	var date = Date();
	document.getElementById('date').innerText = date;
	document.getElementById('date').style = "color:blue";
	var num2 = document.getElementById('username').value;
	document.getElementById('username2').innerText = num2;
	var num3 = document.getElementById('password').value;
	document.getElementById('password2').innerText = num3;
	var num4 = document.getElementById('firstname').value;
	document.getElementById('firstname2').innerText = num4;
	var num5 = document.getElementById('lastname').value;
	document.getElementById('lastname2').innerText = num5;
	var num6 = document.getElementById('comment').value;
	document.getElementById('comment2').innerText = num6;
	}