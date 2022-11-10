
firebase.auth().onAuthStateChanged((user) => {
  if (user) {

document.getElementById("avg").innerHTML = "NaN";

const dbRef = firebase.database().ref();

dbRef.child("marks/" + user.uid).once('value').then((snapshot) => {
  if (snapshot.exists()) {
    var data = Object.values(snapshot.val());
    var total=0;

    for (i=0;i<data.length;i++) {
      total=total + data[i].score;
      
    }


    document.getElementById("avg").innerHTML = total/data.length + "%";
console.log("Data fetched!");
if (total==0) {
  document.getElementById("avg").innerHTML = "NaN"; 
}

  } else {
    document.getElementById("avg").innerHTML = "NaN";
  }
}).catch((error) => {
  console.log(error);
});


} else {
  // User is signed out
  console.log("Signed Out!");
}
});