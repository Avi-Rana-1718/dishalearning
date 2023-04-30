var ans =[];
var optionsLength=[0];
let url = new URLSearchParams(window.location.search)

fetch(url.get("id") + ".json")
.then(res => res.json())
.then(data => {
document.getElementById("title").innerHTML = data.testName;

  for(var i=0;i<data.questions.length;i++) {

    var optionsData="";
    for(var j=1;j<=data.options[i].length;j++) {
      optionsData += `<input type="radio" name="ans${i}" id="${i}option${j}"></input><label for="${i}option${j}">${data.options[i][j-1]}</label><br>`;
      optionsLength[i]++;
    }    

    ans[i]=data.answers[i];
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("class", `item`);
    li.insertAdjacentHTML('beforeend', `<div class="accordianHeader"><h5 class="qNo">Question ${i+1}</h5></div>

    <div class="accordianContent">
      <p class="question">${data.questions[i]}</p><br>
        ${optionsData}
    </div>`);
    ul.appendChild(li);
  }
})


var points=0;

function submit() {
  console.log(ans.length);
  for(var i=0;i<ans.length;i++) {

    document.getElementById("submit").disabled = true;

    for(var j=0;j<optionsLength;j++) {
      document.getElementById(`${i}option${j}`).disabled=true;
    }

    if(document.getElementById(`${i}option${ans[i]}`).checked) {
      points++;
      document.getElementsByClassName("item")[i].style.backgroundColor = "#A3CFBB";
    } else {
      document.getElementsByClassName("item")[i].style.backgroundColor = "#F1AEB5";
    }
  }

  document.getElementById("result").style.display = "inline-block";
  document.getElementById("resultMessage").innerHTML = `Marks: ${points}/${ans.length}<br>Percentage: ${Math.floor((points/ans.length)*100)}%`;
  window.location.href = "#title";
}