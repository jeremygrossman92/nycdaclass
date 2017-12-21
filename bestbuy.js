$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	if($("#iPhone").is(":checked")){
		total = total + 699.00;
		$("#items").append("iPhone - $699.00 <br>");
	}

	if($("#android").is(":checked")){
		total = total + 559.00;
		$("#items").append("Android - $559.00 <br>");
	}

	if($("#laptop").is(":checked")){
		total = total + 1000.00;
		$("#items").append("Laptop - $1000.00 <br>");
	}

	if($("#charger").is(":checked")){
		total = total + 49.00;
		$("#items").append("Charger - $49.00 <br>");
	}

	$("#totalCost").html("The Total Cost is $" + total);
})