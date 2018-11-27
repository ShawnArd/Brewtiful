// sample searchTerm and geocoordinates for test purposes
// we'll need an api or firebase of coordinates for zip codes
var searchTerm = "brewery";
var userLatitude = "41.881832";
var userLongitude = "-87.623177";

var geocoordinates = "&latitude=" + userLatitude + "&longitude=" + userLongitude;
console.log("maybe?")
$("#user-submit").on("click", function(){
  console.log("here") 
  $("#brewery-div").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ&q=Space+Needle,Seattle+WA' width='300' height='225' frameborder='0px' margin='20px 0px' allowfullscreen></iframe>")
  console.log("here too")

})



// var googleKey = "AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ";