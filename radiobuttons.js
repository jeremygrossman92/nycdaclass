$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	if($("#wholeWheat").is(":checked")){
		total = total + 3.99;
		$("#items").append("Whole Wheat Bread - $3.99 <br>");
	}

	if($("#whiteBread").is(":checked")){
		total = total + 2.95;
		$("#items").append("White Bread - $2.95 <br>");
	}

	if($("#potatoBread").is(":checked")){
		total = total + 2.99;
		$("#items").append("Potato Bread - $2.99 <br>");
	}


	if($("#eggs").is(":checked")){
		total = total + 2.99;
		$("#items").append("Eggs - $2.99 <br>");
	}		

	if($("#milk").is(":checked")){
		total = total + 3.25;
		$("#items").append("Milk - $3.25 <br>");
	}		

	if($("#water").is(":checked")){
		total = total + 1.00;
		$("#items").append("Water - $1.00 <br>");
	}		

	total = total.toFixed(2);

	$("#totalCost").html("The Total Cost is $" + total);
})