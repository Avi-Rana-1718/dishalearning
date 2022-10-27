var email, password;

function signUp() {
    var username;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    username = document.getElementById("username").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 

    var user = userCredential.user;
    return user.updateProfile({
          displayName: username,
        })
        
      }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //ERROR TIP
    document.getElementById("errorMessage").style.backgroundColor = "red";
    document.getElementById("errorMessage").innerHTML = errorCode + errorMessage;
    document.getElementById("error").style.display = "block";
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
console.log(user.displayName);
  })
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //ERROR TIP
    document.getElementById("errorMessage").innerHTML = errorCode + " " + errorMessage;
    document.getElementById("error").style.display = "block";
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
      
      if (window.location == "https://dishalearning.in/auth.html") {
        window.location.href="index.html";
      }
      document.getElementById("login").innerHTML = "<i class='fas fa-user'></i> <span id='username'>" + username + "</span>";
      // ...
    } else {
      // User is signed out
      // ...
      if ((window.location.href!=="https://dishalearningin/index.html") || (window.location.href="https://dishalearning.in")){
        window.location.href="auth.html";
      }

    }
  });
}


// RESET PASSWORD

function resetPass(email) {
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    console.log("Reset mail sent!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}