var ans =[];

fetch("ch1.json")
.then(res => res.json())
.then(data => {
document.getElementById("title").innerHTML = data.testName;

  for(var i=0;i<data.answers.length;i++) {
    ans[i]=data.answers[i];
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("class", `item`);
    li.insertAdjacentHTML('beforeend', `<div class="accordianHeader"><h5 class="qNo">Question ${i+1}</h5></div>

    <div class="accordianContent">
      <p class="question">${data.questions[i]}</p><br>
      <input type="radio" name="ans${i}" id="${i}option1"></input><label for="${i}option1">${data.options[i][0]}</label><br>
      <input type="radio" name="ans${i}" id="${i}option2"></input><label for="${i}option2">${data.options[i][1]}</label><br>
      <input type="radio" name="ans${i}" id="${i}option3"></input><label for="${i}option3">${data.options[i][2]}</label><br>
      <input type="radio" name="ans${i}" id="${i}option4"></input><label for="${i}option4">${data.options[i][3]}</label><br>
    </div>`);
    ul.appendChild(li);
  }
})


var points=0;

function submit() {
  console.log(ans.length);
  for(var i=0;i<ans.length;i++) {

    document.getElementById("submit").disabled = true;
    document.getElementById(`${i}option1`).disabled=true;
    document.getElementById(`${i}option2`).disabled=true;
    document.getElementById(`${i}option3`).disabled=true;
    document.getElementById(`${i}option4`).disabled=true;

    if(document.getElementById(`${i}option${ans[i]}`).checked) {
      points++;
      document.getElementsByClassName("item")[i].style.backgroundColor = "#A3CFBB";
    } else {
      document.getElementsByClassName("item")[i].style.backgroundColor = "#F1AEB5";
    }
  }

  document.getElementById("result").style.display = "inline-block";
  document.getElementById("resultMessage").innerHTML = `Marks: ${points}/${ans.length}<br>Percentage: ${Math.floor((points/ans.length)*100)}%`;
  window.location.href = "#result";
}