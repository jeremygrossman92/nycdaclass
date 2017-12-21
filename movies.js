$("#btn1").click(function(){ 
var movietitle = $("#movietitle").val();

$.getJSON('http://www.omdbapi.com/?apikey=284f4044&t=' + movietitle,
 function(data) {
   console.log(data);

   var year = data["Year"];
   $("#year").html(year);

   var runtime = data["Runtime"];
   $("#runtime").html(runtime);

   var rating = data["Rated"];
   $("#rating").html(rating);

   var genre = data["Genre"];
   $("#genre").html(genre);

    var plot = data["Plot"];
   $("#plot").html(plot);

   $.getJSON('http://www.omdbapi.com/?apikey=284f4044&t=' + movietitle,
 function(data) {
   console.log(data);
   var moviePoster = data["Poster"]
      console.log(data);
   $("#moviePoster").attr("src", moviePoster);
 })


 })
})