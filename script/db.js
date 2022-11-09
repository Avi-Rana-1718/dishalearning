const dbRef = firebase.database().ref();
dbRef.child("marks/uid").once('value').then((snapshot) => {
  if (snapshot.exists()) {
    var data = Object.values(snapshot.val());

    var total=0;

    for (i=0;i<data.length;i++) {
      total=total + data[i].score;
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.innerHTML = "<small>" + data[i].topic + "</small><p>" + data[i].chp + "</p><h5>" + data[i].score + "/100</h5>";
      ul.appendChild(li)
    }

    document.getElementById("avg").innerHTML = total/data.length + "%";
console.log(data[0]);
console.log(data[0].score);
  } else {
    total=total + data[i].score;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.innerHTML = "No data found.";
    ul.appendChild(li)
  }
}).catch((error) => {
  console.error(error);
});