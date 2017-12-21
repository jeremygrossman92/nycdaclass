$("#cat1").show(function(){
$("#cat1").animate({
	width: "70%",
	height: "30%",
	left: "100px"
 } , 2000 );
 })

$("#dog1").hide();

$("#crazyaboutcats").show(function(){
$("#crazyaboutcats").animate({
	left: "600px"
 } , 2000 );
 })

$("#learnaboutcats").show(function(){
$("#crazyaboutcats").animate({
	left: "400px"
 } , 2000 );
 })

$("#catbutton").click(function(){
	$("#cat1").fadeOut(1000);
})

$("#catbutton").click(function(){
	$("#cat2").fadeOut(1000);
})

$("#catbutton").click(function(){
	$("#cat3").fadeOut(1000);
})

$("#catbutton").click(function(){
	$("#crazyaboutcats").text("Crazy About Dogs");
})

$("#catbutton").click(function(){
	$("#learnaboutcats").text("Here is a dog.");
})

$('#catbutton').click(function(){
    $("#dog1").show();
})