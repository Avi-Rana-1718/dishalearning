var uid;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {

document.getElementById("avg").innerHTML = "NaN";

const dbRef = firebase.database().ref();

dbRef.child("marks/" + user.uid).once('value').then((snapshot) => {
  if (snapshot.exists()) {
    var data = Object.values(snapshot.val());
    var total=0;
var color;
    for (i=0;i<data.length;i++) {
      total=total + data[i].score;
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      if (data[i].topic=="Physics") {
        color="#9333EA";
      } else if (data[i].topic=="Chemistry") {
        color="#DB2777";
      } else if (data[i].topic=="Biology") {
        color="#22C55E";
      } else if (data[i].topic=="Mathematics") {
        color="#EAB308";
      }
      li.innerHTML ="<small style='color:" + color + ";'>" + data[i].topic + "</small><p>" + data[i].chp + "</p><small>Marks Obtained: " + data[i].score + "%</small>";
      ul.appendChild(li)
    }


    document.getElementById("avg").innerHTML = total/data.length + "%";
console.log("Data fetched!");
if (total==0) {
  document.getElementById("avg").innerHTML = "NaN"; 
}

  } else {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.innerHTML = "No data found.";
    ul.appendChild(li)
  }
}).catch((error) => {
  console.log(error);
});


} else {
  // User is signed out
  console.log("Signed Out!");
}
});
