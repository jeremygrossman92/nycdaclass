var add = document.getElementById('add');
add.onclick = function(){
	var firstNumber = document.getElementById('firstNumber').value;
	var secondNumber = document.getElementById('secondNumber').value;
	var answer = parseInt(firstNumber) + parseInt(secondNumber);
	document.getElementById('answer').value = answer;
	document.getElementById('answer').innerHTML = answer;
}

var subtract = document.getElementById('subtract');
subtract.onclick = function(){
	var firstNumber = document.getElementById('firstNumber').value;
	var secondNumber = document.getElementById('secondNumber').value;
	var answer = parseInt(firstNumber) - parseInt(secondNumber);
	document.getElementById('answer').value = answer;
	document.getElementById('answer').innerHTML = answer;
}

var multiply = document.getElementById('multiply');
multiply.onclick = function(){
	var firstNumber = document.getElementById('firstNumber').value;
	var secondNumber = document.getElementById('secondNumber').value;
	var answer = parseInt(firstNumber) * parseInt(secondNumber);
	document.getElementById('answer').value = answer;
	document.getElementById('answer').innerHTML = answer;
}

var divide = document.getElementById('divide');
divide.onclick = function(){
	var firstNumber = document.getElementById('firstNumber').value;
	var secondNumber = document.getElementById('secondNumber').value;
	var answer = parseInt(firstNumber) / parseInt(secondNumber);
	document.getElementById('answer').value = answer;
	document.getElementById('answer').innerHTML = answer;
}