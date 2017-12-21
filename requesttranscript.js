//To open modal
$('#openModal').click(function(){
 $('.modal-wrapper').fadeIn();
 	var firstName = $("#firstName").val();
 	var lastName = $("#lastName").val();
 	var address = $("#address").val();
 	var major = $("#major").val();
 	 var degree = $("#degreeReceived").val();
 	  	var year = $("#yearOfCompletion").val();



 	$(".fullName").html(firstName + " " + lastName);
 	 	$(".address").html(address);
 	 		$(".major").html(major);
 	 		 	 	$(".degree").html(degree);
 	 		 	 		 $(".year").html(year);




 })

//To close modal
$('.js-modal-close').click(function(){
    $('.modal-wrapper').fadeOut();
})