alert ("Hi there!");
prompt("Enter your name");

console.log("From the console.");

function addNums(){  
	num1 = document.getElementById('num1').value;  
	num2 = document.getElementById('num2').value;
	document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
}

var cars = ["Nissan", "Toyota", "Honda"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

var person = {"firstname":"John", "lastname":"Smith"};
console.log("test");
console.log("let's party");
console.log(person.firstname);
console.log(person.lastname);

document.getElementById("car").value = cars[1];

if(5>10){
	console.log("You'll never see this in the console because 5 is not greater than 10");
}

if(5<10){
	console.log("But you'll definitely see this!");
}

if(5>10){
	console.log("You'll never see this because 5 is not greater than 10");
} else{
	console.log("You will see this though, since 5 < 10 evaluates to false")
}

if(5>10){
	console.log("You'll never see this because 5 is no greater than 10")
}

if(5==5){
	console.log("Hey")
}

for(var i = 0; i <= 10; i=i+1){
	console.log(i)
}

var a=5;

if(a<10){
	alert("This variable is less than 10");
}else{
	alert("This variable is NOT less than 10");
}

if(5>10){
	console.log("You'll never see this because 5 is not greater than 10");
}else if(5===5){
	console.log("Yes, 5 really is equal to 5, so this will show up in the console");
}else{
	console.log("We won't get here because our else if evaluates to true");
}

function someName(numberOne, otherNumber){
	return numberOne + 10 + otherNumber;
}
console.log(someName(6, 50));

function alertName(somePersonsName){
	return alert(somePersonsName);
}
alertName("Zach");

function consoleOut(){

	return console.log("something cool");
}
var name = "hahaha";

consoleOut(name);

for(var i = 0; i<10; i++){
	console.log(i);
}

beers = ["Lagunitas", "Peak", "Bud Lite"]
for(var i = 0; i< beers.length; i++){
	console.log(beers[i])
}

x = 6
while(x < 10){
	console.log("On number" + x)
		x++;

y = 99;
while(y > 0){
	console.log(y + "bottles of beer")
		y--;
}