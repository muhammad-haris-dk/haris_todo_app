function additems() {
  var input = document.getElementById("input");

  var listElement = document.createElement("li");

  var listText = document.createTextNode(input.value);

  listElement.setAttribute("class","lielement")

  listElement.appendChild(listText);

  var button = document.createElement("button");

  var buttonText = document.createTextNode("edit");

  button.setAttribute("class", "editbtn");

  button.appendChild(buttonText);

  button.setAttribute("onclick","edititems(this)")

  var delbutton = document.createElement("button");

  var delButtonText = document.createTextNode("delete");

  delbutton.setAttribute("class", "delbtn");

  delbutton.appendChild(delButtonText);

  delbutton.setAttribute("onclick", "delitem(this)")

  listElement.appendChild(button);

  listElement.append(delbutton);

  var list = document.getElementById("list");

  list.appendChild(listElement);

  input.value = "";
}
function deleteAll() {
  var list = document.getElementById("list");

  list.innerHTML = "";
}

function delitem(e){
  console.log(e.parentNode.remove());
}
function edititems(x){
  var input = prompt("Enter a Updated Value")

  x.parentNode.firstChild.nodeValue = input
}