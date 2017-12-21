//To open modal
$('#openModal').click(function(){
 $('.modal-wrapper').fadeIn();
 	var firstName = $("#firstName").val();
 	var lastName = $("#lastName").val();
 	var address = $("#address").val();
 	var size = $("#size").val();
	var ups = $("#ups").val();
	var fedex = $("#fedex").val();
	var usps = $("#usps").val();
	var color = $("#color").val();


 	$(".fullName").html(firstName + " " + lastName);
		 	 	$(".address").html(address);
		 	 	 	 	$(".pants").html(size + ", " + color + " pants.");


	if($("#ups").is(":checked")){
		$(".delivery").html("UPS" + ".");
	}

	if($("#fedex").is(":checked")){
		$(".delivery").html("FedEx" + ".");
	}

	if($("#usps").is(":checked")){
		$(".delivery").html("USPS" + ".");
	}


 })

 //To close modal
$('.js-modal-close').click(function(){
    $('.modal-wrapper').fadeOut();
})