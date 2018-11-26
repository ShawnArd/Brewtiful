

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMvNCFUEHrKpAO84w1lSa87uymA4whoXE",
    authDomain: "project-1-forum.firebaseapp.com",
    databaseURL: "https://project-1-forum.firebaseio.com",
    projectId: "project-1-forum",
    storageBucket: "",
    messagingSenderId: "959023985490"
};
firebase.initializeApp(config);
var database = firebase.database();
$("#chatBtn").on("click", function (e) {
    e.preventDefault();
    var time = Date.now();
    var userChat = $("#user-input")
        .val()
        .trim();
    var userNameInput = $("#user-name").val().trim();
    var newChat = {
        name: userNameInput,
        input: userChat,
        date: time
    };
    console.log(newChat);
    database.ref().push(newChat);
    $("#user-name").val("");
    $("#user-input").val("");
    $("#time-show").val("");


});


database.ref().on("child_added", function (childSnapshot) {
    var userNameDisp = childSnapshot.val().name;
    var newInput = childSnapshot.val().input;
    var currentTime = childSnapshot.val().time;

    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log(currentTime);

    $("#chat-display").append("<div class ='display-text'><p>" + userNameDisp + ":  " + newInput + "<br>" + currentTime + "</p></div>");

})


//need to create firebase
// push the user input to firebases
// get the information from firebase and display it on dom //

