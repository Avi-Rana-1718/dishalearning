
fetch("practice/data.json")
.then(res => res.json())
.then(data => {
  for(var i=0;i<data.info.length;i++) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("class", `item`);
    li.insertAdjacentHTML('beforeend', `
    <b>${data.info[i].name}</b><br>
      <b>Class:</b> ${data.info[i].class}<br>
      <b>Subject:</b> ${data.info[i].subject}<br>
      <b>Questions:</b> ${data.info[i].totalQuestions}<br>
      <a href="/practice/attempt.html?id=${data.info[i].link}">Attempt</a>
    `);
    ul.appendChild(li);
  }
})
