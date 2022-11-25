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

function addUser(){
    user_name=document.getElementById(user_name).value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
  }