var email, password;

let params = new URLSearchParams(window.location.search);

function signUp() {
  document.getElementById("signup").disabled = true;
  document.getElementById("error-create").style.display = "none";
  redirect = false;

    document.getElementById("create").style.display = "inline-block";


    var username;
    email_create = document.getElementById("email_create").value;
    password_create = document.getElementById("pass_create").value;
    username = document.getElementById("username").value;

firebase.auth().createUserWithEmailAndPassword(email_create, password_create)
  .then((userCredential) => {

    // Signed in 
    
    var user = userCredential.user;
    user.updateProfile({
      displayName: username
    }).then(() => {
      // Update successful
      console.log("Profile Set Successfully.");
      if(params.has("backlink")) {
        window.location.href = params.get("backlink");
      } else {
      window.location.href="dashboard.html";
      }
    }).catch((error) => {
      // An error occurred
     console.log(error);
    });  
        
      }).catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("signup").disabled = false;
    document.getElementById("error-create").style.display = "block";
    document.getElementById("error-create").innerHTML = '<i class="fas fa-exclamation-circle"></i>' + errorMessage;
  });
}

function signIn() {
  document.getElementById("loginBtn").disabled = true;

  email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    document.getElementById("error").style.display = "none";

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in

    var user = userCredential.user;
    console.log("Signed In");

    logger("User logged on: " + user.email, 101);



  })
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    errorHandler(errorMessage);
    logger("Error while logging on: " + email + "\n" + errorMessage);
  });
  
}

//AUTHCHECK

function authCheck() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("rightbarUsername").innerHTML = user.displayName;
      logger(`Logged in user(${user.email}) accessed: ${window.location.href}`);
    } else {

      document.getElementById("authPrompt").style.display="block";
      document.getElementById("content").style.filter= "blur(5px)";
      logger(`Logged out user tried to accessed: ${window.location.href}`);
      console.log("Signed Out!");
    }
  });
}

//LOGOUT
function logout() {
firebase.auth().signOut().then(() => {
  // Sign-out successful.
  console.log("Successful logout!");

  logger("User logged out");
  window.location.href = "auth.html";

}).catch((error) => {

      errorHandler(error);
      logger("Error while logging out");

});
}

//RESETPASS
function reset() {
  var email_pass=document.getElementById("email_reset").value;
  firebase.auth().sendPasswordResetEmail(email_pass)
  .then(() => {

    document.getElementById("error_reset").style.display = "block";
    document.getElementById("error_reset").style.backgroundColor = "#4BB543";
    document.getElementById("error_reset").innerHTML = '<i class="fas fa-check-circle"></i> Password mail sent succcessfully.';

    logger("Password reset mail send successfully: " + email_pass);

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    logger("Error while sending password reset mail on: " + email_pass + "\n" + errorMessage);


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
      document.getElementById("uid").innerHTML = user.uid;
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
function create() {
  document.getElementById("reset").style.display = "none";
  document.getElementById("create").style.display = "inline-block";
  document.getElementById("auth").style.display = "none";
}
function back() {
  document.getElementById("reset").style.display = "none";
  document.getElementById("create").style.display = "none";
  document.getElementById("auth").style.display = "inline-block";
}


function logger(text) {
  var timestamp = new Date().getTime();
  var date = new Date();

  firebase.database().ref('log/' + timestamp).set({
    text: text,
    date: date.toString()
  });
}