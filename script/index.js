
firebase.auth().onAuthStateChanged((user) => {
  if (user) {


} else {
  // User is signed out
  console.log("Signed Out!");
}
});





