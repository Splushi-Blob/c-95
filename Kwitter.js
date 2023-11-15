
const firebaseConfig = {
    apiKey: "AIzaSyCLscvKMN3-ofahI1JbJxwntzc4Qg2QAWI",
    authDomain: "chatapp-460c9.firebaseapp.com",
    projectId: "chatapp-460c9",
    storageBucket: "chatapp-460c9.appspot.com",
    messagingSenderId: "79151177848",
    appId: "1:79151177848:web:f07b639e1680fa71720d8d"
  };

function addUser(){
    var username = document.getElementById("user_name")
    //console.log(document.getElementById("user_name"))//
    window.location.replace("Kwitter_room.html")
   }