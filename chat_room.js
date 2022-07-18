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


var userName = localStorage.getItem("userName")
document.getElementById("user").innerHTML = "Welcome " + userName

function addRoom() {
    roomName = document.getElementById("roomName").value 
    localStorage.setItem("roomName", roomName)

    firebase.database().ref("/").child(roomName).update({
        purpose:"Adding Room",
        creater:userName
    })

    //window.location = "chat_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                roomNames = childKey;
                var row = "<div id = '" + roomNames + "' class = 'room_name' onclick = 'redirectToRN(this.id)'>" + roomNames + "</div><hr>"

                document.getElementById("output").innerHTML += row

          });
    });
}
getData();

function redirectToRN(name) { 
    console.log(name)

    localStorage.setItem("roomName", name)

    window.location = "chat_page.html"
}


function logout() {
    window.location = "index.html"
    localStorage.removeItem("userName")

    localStorage.removeItem("roomName")
}