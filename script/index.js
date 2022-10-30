function hideDropdown() {
    document.getElementById('dropmenu').style.display='block';
    document.getElementById('down').style.display='none';
    document.getElementById('up').style.display='inline';
}
function showDropdown() {
    document.getElementById('dropmenu').style.display='none';
    document.getElementById('down').style.display='inline';
    document.getElementById('up').style.display='none';
}
function dark() {
    var fileref = document.createElement("link");
fileref.rel = "stylesheet";
fileref.type = "text/css";
fileref.href = "style/theme-dark.css";
document.getElementsByTagName("head")[0].appendChild(fileref);

// document.getElementById("reviews").style.backgroundColor = "#1F2326";
}