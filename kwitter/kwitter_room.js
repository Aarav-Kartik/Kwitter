const firebaseConfig = {
      apiKey: "AIzaSyANNOX7dIcXGDbQ8AnXyg6yYU3XKVGtZdI",
      authDomain: "kwitter-7728a.firebaseapp.com",
      projectId: "kwitter-7728a",
      storageBucket: "kwitter-7728a.appspot.com",
      messagingSenderId: "678217171437",
      appId: "1:678217171437:web:10cec2860e55d71ef167e4",
      measurementId: "G-ZR8H978474"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console. log ("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.1d)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output"). innerHTML+=row;
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location="kwitter_page.html";
}
