
var clickbutton = document.getElementById('clickbutton');
	clickbutton.onclick = function(){
	var guess = document.getElementById('guessinggame').value;

	var secret = Math.floor(Math.random()*5)+1;

	console.log(secret);
	if  (secret == guess){
		document.getElementById('result').innerText = "Correct!";
	}else{
		document.getElementById('result').innerText = "Not correct!";
	}
}