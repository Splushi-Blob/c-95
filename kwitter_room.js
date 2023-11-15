user_name_label = document.getElementById("username")
console.log(user_name_label)

function addRoom(){
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div>
</div>
//End code
});});}
getData();
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}