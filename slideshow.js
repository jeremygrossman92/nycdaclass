var index = 0;
slideshow();

function slideshow() {
	$(".box").css("display", "none");

	index++;
	if (index > $(".box").length) {
	index = 1
	}
	$(".box").eq(index-1).css("display", "block");
	setTimeout(slideshow, 1000);
}