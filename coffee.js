var btn = document.getElementById('btn');
btn.onclick = function(){
	var age = document.getElementById('age').value;
	var cups = document.getElementById('cups').value;
	var retire = document.getElementById('retire').value;
	var coffeeNum = (parseInt(retire) - parseInt(age)) * parseInt(cups) * 365;
	console.log(coffeeNum);
	document.getElementById('coffeeNum').innerHTML = coffeeNum;
	document.getElementById('coffeeNum').style.backgroundColor = "red";
}