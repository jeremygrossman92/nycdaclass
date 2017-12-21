$("#btn1").click(function(){ 
var uscity = $("#uscity").val();

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var temperature = data["main"]["temp"];
   $("#temperature").html(temperature);
 })

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var humidity = data["main"]["humidity"];
   $("#humidity").html(humidity);
 })

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var windspeed = data["wind"]["speed"];
   $("#windspeed").html(windspeed);
 })

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var windspeed = data["wind"]["speed"];
   $("#windspeed").html(windspeed);
 })

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var description = data["weather"][0]["description"];
   $("#description").html(description);
 })

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + uscity + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
   console.log(data);
   var myIcon = data["weather"][0]["icon"]; // Only a partial name of the image, without the PNG and without the address
   var imageSrc = "http://openweathermap.org/img/w/" + myIcon + ".png"; // Full path
   console.log(imageSrc)
   $("#myIcon").attr("src", imageSrc);
 })
})
