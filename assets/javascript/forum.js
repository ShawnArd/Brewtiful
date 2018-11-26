

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
    var userChat = $("#user-input")
        .val()
        .trim();
    var newChat = {
        input: userChat
    };
    console.log(newChat);
    database.ref().push(newChat);
    $("#user-input").val("")

});
database.ref().on("child_added", function (childSnapshot) {
    var newInput = childSnapshot.val().input;

    console.log(newInput);

    $("#chat-display").append("<div class ='display-text'><p>" + newInput + "</p></div>");
})
//need to create firebase
// push the user input to firebases
// get the information from firebase and display it on dom //

