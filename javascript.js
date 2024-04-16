const aufgabenListe = document.getElementById("item-list");
const textFeld = document.getElementById("add");
// Add Button
const addButton = document.getElementById("add-btn");

function addItem() {
  if (textFeld.value === "") {
    alert("Mensch, schreib doch was...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textFeld.value;
    li.className = "list-group-item";
    aufgabenListe.appendChild(li);
    let cross = document.createElement("cross");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
  textFeld.value = "";
}

addButton.addEventListener("click", addItem);

// Clear Button
const clearButton = document.getElementById ("clear-button");

function clearList() {
  if (aufgabenListe.innerHTML === "") {
    alert("Ist doch leer Mensch...");
  } else {
    aufgabenListe.innerHTML = "";
  }
}

clearButton.addEventListener("click", clearList);

//delete
const Deletebutton = document.getElementById('item-list');
Deletebutton.addEventListener (
  "click",
  function (Deletethis) {
    if (Deletethis.target.matches("cross")) {
      Deletethis.target.parentElement.remove();
    }
  },
  false
);
//edit
function editItem(button) {
  let listItem = button.parentElement;
  let textNode=  listItem.firstChild;
  let editText = prompt("Edit task:", textNode.textContent.trim());
  if (!editText || editText === textNode.textContent.trim()) {
    return;}
  }

//check
function check(click) {
const checklist = document.getElementById('item-list');
checklist.addEventListener('click', event=> {
  if (event.target.tagName ==='LI') {
      event.target.classList.toggle('checkend');
  }
 });}
