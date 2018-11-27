// sample searchTerm and geocoordinates for test purposes
// we'll need an api or firebase of coordinates for zip codes
var searchTerm = "brewery";
var userLatitude = "41.881832";
var userLongitude = "-87.623177";

var geocoordinates = "&latitude=" + userLatitude + "&longitude=" + userLongitude;

$("#user-submit").on("click", function()){
    $("#brewery-div").html("<iframe
    width="300"
    height="225"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ&q=Space+Needle,Seattle+WA" allowfullscreen>
  </iframe>"

})



// var googleKey = "AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ";