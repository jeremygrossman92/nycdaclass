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
		$("#box1").css("background-color", "blue")
		// $("#box1").animate({left: "+=40px"});
		$("#box1").css("background", "url('spaceship2.png')");
		$("#box1").css("background-size", "contain");
		$("#box1").css("background-repeat", "no-repeat");
	}
	var box1Position = $("#box1").position();
	var box1XPosition = box1Position.left;
	var box1YPosition = box1Position.top;
	if(box1XPosition > 600){
		$("#box1").css("display", "none");
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