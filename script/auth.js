var email, password;

function signUp() {
    var username, phone;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    username = document.getElementById("username").value;
    phone = document.getElementById("phone").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    document.getElementById("prompt").style.backgroundColor = "#4ca896";
    document.getElementById("promptMessage").innerHTML = "Success";
    document.getElementById("prompt").style.display = "block";

    var user = userCredential.user;
    return user.updateProfile({
          displayName: username,
          phoneNumber: phone,
        })
        
      }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //ERROR TIP
    document.getElementById("prompt").style.backgroundColor = "#d92324";
    document.getElementById("promptMessage").innerHTML = "<i class='fas fa-exclamation-circle'></i> " + errorCode + " " + errorMessage;
    document.getElementById("prompt").style.display = "block";
  });
}

function signIn() {
  email = document.getElementById("email").value;
    password = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in



    var user = userCredential.user;
    console.log("Signed In");
    window.location.href="dashboard.html";
console.log(user.displayName);
  })
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //ERROR TIP

  });
}

//

function authCheck() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var username =  user.displayName;
      
      document.getElementById("down").style.display="inline";
      document.getElementById("username").innerHTML = username + "</span>";
      document.getElementById("username").href = "#"
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Signed Out!");

    }
  });
}

//LOGOUT
function logout() {
firebase.auth().signOut().then(() => {
  // Sign-out successful.

  window.location = "auth.html";
}).catch((error) => {
  // An error happened.
      //ERROR TIP

});
}

//USERINFO

function userInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var username =  user.displayName;
      var email = user.email;
      var phone = user.phoneNumber;
      
      document.getElementById("name").innerHTML = username;
      document.getElementById("uid").innerHTML = uid;
      document.getElementById("email").innerHTML = email;
      document.getElementById("phone").innerHTML = phone;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Signed Out!");

    }
  });
}