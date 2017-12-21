$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	if($("#kindle7").is(":checked")){
		total = total + 49.99;
		$("#items").append("Kindle Fire HD 7 - $49.99 <br>");
	}

	if($("#kindle8").is(":checked")){
		total = total + 79.99;
		$("#items").append("Kindle Fire HD 8 - $79.99 <br>");
	}

	if($("#kindle10").is(":checked")){
		total = total + 149.99;
		$("#items").append("Kindle Fire HD 10 - $149.99 <br>");
	}

	if($("#html").is(":checked")){
		total = total + 15.99;
		$("#items").append("HTML Design book - $15.99 <br>");
	}

	if($("#cook").is(":checked")){
		total = total + 22.99;
		$("#items").append("CSS Cook book - $22.99 <br>");
	}

	if($("#jQuery").is(":checked")){
		total = total + 25.99;
		$("#items").append("jQuery Is Fun book - $22.99 <br>");
	}

	$("#totalCost").html(total);
})