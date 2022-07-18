const firebaseConfig = {
    apiKey: "AIzaSyC96McPYvnDjUrfhZscgTdq1a3M3QjMGso",
    authDomain: "chat-fe142.firebaseapp.com",
    databaseURL: "https://chat-fe142-default-rtdb.firebaseio.com",
    projectId: "chat-fe142",
    storageBucket: "chat-fe142.appspot.com",
    messagingSenderId: "226832609055",
    appId: "1:226832609055:web:3db6d9900389705b3fca2a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    console.log(user_name)
   
    localStorage.setItem("userName", user_name);

    window.location = "chat_room.html";
}



