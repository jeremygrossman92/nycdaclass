$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	var name = $("#name").val();
    $("#items").append(name + "<br>");
      

	if($("#large").is(":checked")){
		total = total + 13.99;
		$("#items").append("Large ($13.99) <br>");
	}

	if($("#medium").is(":checked")){
		total = total + 11.99;
		$("#items").append("Medium ($11.99) <br>");
	}

	if($("#small").is(":checked")){
		total = total + 9.99;
		$("#items").append("Small ($9.99) <br>");
	}

	if($("#pepperoni").is(":checked")){
		total = total + 1.99;
		$("#items").append("Pepperoni ($1.99) <br>");
	}

	if($("#sausage").is(":checked")){
		total = total + 1.99;
		$("#items").append("Sausage ($1.99) <br>");
	}

	if($("#mushroom").is(":checked")){
		total = total + 1.99;
		$("#items").append("Mushroom ($1.99) <br>");
	}

	var soda = $("#soda").val();
	    $("#items").append(soda + "<br>");

	var salesTax = 0.06875 * total;
		total = total + salesTax;
		 salesTax = salesTax.toFixed(2);
		$("#items").append("Sales Tax: " + salesTax + "<br>");

		total = total.toFixed(2);

	$("#totalCost").html("Total: " + total);
})