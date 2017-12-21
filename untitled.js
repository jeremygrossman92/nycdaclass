var btn = document.getElementById('btn');
btn.onclick = function(){
	var age = document.getElementById('age').value;
	var cups = document.getElementById('cups').value;
	var retire = document.getElementById('retire').value;
	document.getElementById('coffeeNum').value = parseInt(age) * parseInt(cups);
}