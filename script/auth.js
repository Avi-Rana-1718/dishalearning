var email, password;

function signUp() {
    var username;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    username = document.getElementById("username").value;

    firebase.auth().useDeviceLanguage();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    });
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(email, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      console.log("success");
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error);
      // ...
    });
}

function verify() {
  const code = document.getElementById("pass").value;
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log("success");
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  console.log(error);
});
}

function signIn() {
  email = document.getElementById("number").value + "@dishalearning.in";
    password = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    document.getElementById("prompt").style.backgroundColor = "#4ca896";
    document.getElementById("promptMessage").innerHTML = "Success";
    document.getElementById("prompt").style.display = "block";


    var user = userCredential.user;
    console.log("Signed In");
    window.location.href="index.html";
console.log(user.displayName);
  })
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //ERROR TIP
    document.getElementById("prompt").style.backgroundColor = "#d92324";
    document.getElementById("promptMessage").innerHTML = "<i class='fas fa-exclamation-circle'></i> " + errorCode + " " + errorMessage;
    document.getElementById("prompt").style.display = "block";
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
      document.getElementById("username").innerHTML = "<i class='fas fa-user'></i> <span id='name'>" + username + "</span>";
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
  document.getElementById("prompt").style.backgroundColor = "#4ca896";
  document.getElementById("promptMessage").innerHTML = "Success";
  document.getElementById("prompt").style.display = "block";
  window.location = "auth.html";
}).catch((error) => {
  // An error happened.
      //ERROR TIP
      document.getElementById("prompt").style.backgroundColor = "#d92324";
      document.getElementById("promptMessage").innerHTML = "<i class='fas fa-exclamation-circle'></i> " + errorCode + " " + errorMessage;
      document.getElementById("prompt").style.display = "block";
});
}


