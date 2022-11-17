var email, password;

function signUp() {
    var username, phone;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    username = document.getElementById("username").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {

    console.log(phone);
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
    
    errorHandler(errorMessage);
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
    errorHandler(errorMessage);

  });
}

//

function authCheck() {
  console.log("Getting User");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var username =  user.displayName;
      
      document.getElementById("username").innerHTML = '<i class="fas fa-user"></i>' + username;
      document.getElementById("username").href = "account.html";
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Signed Out!");
      window.location.href = "auth.html";

    }
  });
}

//LOGOUT
function logout() {
firebase.auth().signOut().then(() => {
  // Sign-out successful.
  console.log("Successful logout!");

  window.location = "auth.html";
}).catch((error) => {
  // An error happened.
      //ERROR TIP
      errorHandler(errorMessage);

});
}

//RESETPASS
function reset() {
  var email_pass=document.getElementById("email_reset").value;
  firebase.auth().sendPasswordResetEmail(email_pass)
  .then(() => {
    // Password reset email sent!
    // ..
    document.getElementById("error_reset").style.display = "block";
    document.getElementById("error_reset").style.backgroundColor = "#4BB543";
    document.getElementById("error_reset").innerHTML = '<i class="fas fa-check-circle"></i> Password mail sent succcessfully.';

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error_reset").style.display = "block";
  document.getElementById("error_reset").innerHTML = '<i class="fas fa-exclamation-circle"></i>' + errorMessage;
  });
}

//USERINFO

function userInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      
      document.getElementById("name").innerHTML = user.displayName;
      document.getElementById("uid").innerHTML = user.uid;;
      document.getElementById("email").innerHTML = user.email;
      document.getElementById("creation-date").innerHTML = new Date(user.metadata.creationTime);
      // ...
      if (user.emailVerified==true) {
        document.getElementById("name").innerHTML = user.displayName + "<i class='fas fa-tools'></i>";
      } 

    } else {
      // User is signed out
      // ...
      console.log("Signed Out!");

    }
  });
}

function errorHandler(text) {
  document.getElementById("error").style.display = "block";
  document.getElementById("error").innerHTML = '<i class="fas fa-exclamation-circle"></i>' + text;
}

function resetPass() {
  document.getElementById("auth").style.display = "none";
  document.getElementById("reset").style.display = "inline-block";

}
function back() {
  document.getElementById("reset").style.display = "none";
  document.getElementById("auth").style.display = "inline-block";
}