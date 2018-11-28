$(document).ready(function () {

var userSearch = {
    userLat: "",
    userLong: "",
    userRadius: "",
}


var zipCodeInSearch = "";
var userLatitude = "";
var userLongitude = "";
var geocoordinates = userLatitude + "," + userLongitude;
// var radiusOptions is meters equivalent to a .5 mile, 2.5 mile, 5 mile, and 12.5 mile search radius. The API url uses a radius in meters to determine nearby results. we will need to set up a dropdown menu
var radiusOptions = [805, 4023, 8047, 20117];
var userRadius = "";

function userZipCode(){
    $("#user-submit").on("click", function() {
    var userZipCode = $("#user-zip-code").val().trim();
    zipCodeInSearch.push(userZipCode);
    // runSearch();
});
}

var geocoordinates = "&latitude=" + userLatitude + "&longitude=" + userLongitude;
console.log("maybe?")
$("#user-submit").on("click", function(){
  console.log("here") 
  $("#brewery-div").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ&q=Space+Needle,Seattle+WA' width='300' height='225' frameborder='0px' margin='20px 0px' allowfullscreen></iframe>")
  console.log("here too")
});


// Zip Code API

function getCoordinates(){

    var apiKey = "ST0tiPiOJyYCgPyT9KnK5exY5K9WxAdKwsrqkK6wIjRtFRo9JgJ2TxOCVxVlXZ9L";
    // test zip code
    userZipCode = 60647;


    var queryURL = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/" + apiKey + "/info.json/" + userZipCode + "/degrees";

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);
        var lat = response.lat;
        console.log(lat);
        userSearch.push({userLat: lat});
        
        console.log(response.lng);
    })
        
};

console.log(userSearch.userLat);

getCoordinates();

// gmaps API --- something erroneous (permission for business search separate from permission for map embed?)

function embedMaps(){
    var apiKey = "AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ";

    // test geocoordinates for Logan Square, test radius for 5 miles
    var geocoordinates = "41.923122,-87.709290";
    var userRadius = "4023";

    // this URL is for 'google places' instead of 'google map embeds'. fix it.
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + geocoordinates + "&radius=" + userRadius + "&type=brewery&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
};

function searchGooglePlaces(){
    var apiKey = "AIzaSyD6yca5MoRM4toQNPJXqs4nnvQEs-mMoeM";
    var geocoordinates = "41.923122,-87.709290";
    var userRadius = "4023";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + geocoordinates + "&radius=" + userRadius + "&keyword=brewery&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
};
searchGooglePlaces();

});

// https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY


// yelp API -- business details

// function searchYelp(){
//     var apiKey = "Bearer d50zgYw61ZmLxU3P-4KvCsEwiZJoFzSoESlCbNgng1JneMept890xwg89N4rNrwy3pYLRz2Crx_aVBBUod5d80YjI9yS8TePRCkhnJNsld5HTLS4DLqx5-PTjDT8W3Yx";
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//         Authorization: apiKey,
//     }) .then(function(response) {
//         console.log(response);
//     })
// };
// searchYelp();



// function writeResultWindow(){
//     $("#main-div").append("<div id=topics-div></div>");
// }

// function writeResultRow(){
//     // function to define table results;
//     function populateMap(){

//     };
// }

// function runSearch(){

// }





// $("#user-submit").on("click", function(){
//     $("#brewery-div").html("<iframe
//     width="300"
//     height="225"
//     frameborder="0" style="border:0"
//     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2my8N7YcBl2BIR3v-IYBb3dqqHazJdBQ&q=Space+Needle,Seattle+WA" allowfullscreen>
//   </iframe>"

 

// })


// this is the closer for document.ready --
