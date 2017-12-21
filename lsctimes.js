$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-home").offset().top
    }, 1000);
});
$("#aboutus").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-aboutus").offset().top
    }, 1000);
});
$("#contactus").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-contactus").offset().top
    }, 1000);
});