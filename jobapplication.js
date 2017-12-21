$("#button").click(function(){

var firstname = $("#firstname").val();
    if(firstname == ""){
        firstname = "Jane";
    }

var lastname = $("#lastname").val();
    if(lastname == ""){
        lastname = "Doe";
    }

var skills = $("#skills").val();
    if(skills == ""){
        skills = "HTML, CSS, Javascript and jQuery";
    }    

var workexperience = $("#workexperience").val();
    if(workexperience == ""){
        workexperience = "developing websites";
    }

var education = $("#education").val();
    if(education == ""){
        education = "bachelor's degree";
    }

var certification = $("#certification").val();
    if(certification == ""){
        certification = "Web Development";
    }

var jobs = $("#jobs").val();

 var description = firstname + " " + lastname + " " + "has a " + education + " and experience " + workexperience + ", as well as a certificate in "
 + certification + ". " + firstname + " has skills in " + skills + "."
 $("#description").html(description);
 	

var description2 = firstname + " is applying for " + jobs + ".";
$("#description2").html(description2);
	})