function src(src, number, name) {
    console.log("https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/Avi-Rana-1718/DishaLearning/main" + src);
    document.getElementById("viewer").src = "https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/Avi-Rana-1718/DishaLearning/main/" + src;
    document.getElementById("iframe-div").style.display = "block";
    document.getElementById("chp-list").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("download").href = "https://raw.githubusercontent.com/Avi-Rana-1718/DishaLearning/main/" + src;
 window.location = "#viewer";
 var fullname;
fullname = name.split(" - ");
 document.getElementById("specific").style.display = "inline";
 document.getElementById("specific").innerHTML = "<i class='fas fa-chevron-right'></i>" +  number + "th<i class='fas fa-chevron-right'></i>" + fullname[0];
}

function back() {
    document.getElementById("iframe-div").style.display = "none";
    document.getElementById("chp-list").style.display = "block";
    document.getElementById("alert").style.display = "block";
    document.getElementById("specific").style.display = "none";


}