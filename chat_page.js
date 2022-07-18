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



userName = localStorage.getItem("userName")
roomName = localStorage.getItem("roomName")


function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(roomName).push({
            message:msg,
            userName:userName,
            likes:0
      })
}

function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose" ) {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        var name = messageData['userName']
                        var message = messageData['message']
                        var likes = messageData['likes']

                        var nameTag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>"
                        var msgTag = "<h4>" + message + "</h4>"
                        var btnTag = "<button id='"  +firebaseMessageId+ "' value='" + likes + "' onclick='updatelike(this.id)'>"
                        var spanTag = "<span class='glyphicon glyphicon-thumbs-up'></span>"+likes+"</button><hr>"
                        var row = nameTag + msgTag +btnTag+spanTag
                        document.getElementById('output').innerHTML += row
      }});
      });
}
getData();


function updatelike(messageId) {
      var btnlike = document.getElementById(messageId).value
      btnlike = Number(btnlike) + 1
      firebase.database().ref(roomName).child(messageId).update({
            likes:btnlike
      })
}


function logout() {
      localStorage.removeItem("roomName")
      localStorage.removeItem("userName")

      window.location = "index.html"
 }
