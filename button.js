// var btn = document.getElementById("btn");
// btn.onclick = function(){
// 	alert("Hello there");
// }


$("#btn").click(function(){
	alert("Hello there, jQuery");
})

$("#btn1").click(function(){
	$("body").css("background-color", "red");
})

$("#btn2").click(function(){
	$("body").css("background-color", "blue");
})

$("#btn3").click(function(){
	$("#lorem").hide();
})

$("#btn4").click(function(){
	$("#lorem").show();
})

$("#btn5").click(function(){
	$("#box").fadeOut(1000);
})

$("#btn6").click(function(){
	$("#box").fadeIn(1000);
})

$("#btn7").click(function(){
	$("#box").slideUp(1000);
})

$("#btn8").click(function(){
	$("#box").slideDown(1000);
})

$("#btn9").show(function(){
$("#box").animate({
	opacity: "0.25",
	width: "70%",
	height: "30%",
	left: "100px"
 } , 2000 );
 })