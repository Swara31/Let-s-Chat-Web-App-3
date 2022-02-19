var firebaseConfig = {
    apiKey: "AIzaSyCf7wRAgUdRSTyYjzad_W88RLajAko7-qo",
    authDomain: "project-94-b2802.firebaseapp.com",
    projectId: "project-94-b2802",
    storageBucket: "project-94-b2802.appspot.com",
    messagingSenderId: "851233955368",
    appId: "1:851233955368:web:b71e714003de0424de5f1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
       purpose :"adding roomname" 
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}



function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -"+Room_names);
              row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' > #"+Room_names+" </div><hr>";
              document.getElementById("output").innerHTML+=row;
              //End code
        });
  });
}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
