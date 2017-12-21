/*
	Left = 37
	Up = 38
	Right = 39
	Down = 40
*/

$(document).keydown(function (e) {

	console.log(e.which);

	if(e.which == 39){
		$("#box1").css("left", "+=40px");
		// $("#box1").css("background-color", "blue")
		// $("#box1").animate({left: "+=40px"});
		// $("#box1").css("background", "url('spaceship2.png')");
		// $("#box1").css("background-size", "contain");
		// $("#box1").css("background-repeat", "no-repeat");
	}

	if(e.which == 37){
		$("#box1").css("left", "-=40px");
	}
	if(e.which == 40){
		$("#box1").css("top", "+=40px");
	}
	if(e.which === 38){
		$("#box1").css("top", "-=40px");
	}
	if(e.which == 77){
		$("#box1").css("background-color", "yellow");
	}

})