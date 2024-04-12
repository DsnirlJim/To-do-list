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
  }
  textFeld.value = "";
}

addButton.addEventListener("click", addItem);

// Clear Button
const clearButton = document.getElementById("clear-button");

function clearList() {
  if (aufgabenListe.innerHTML === "") {
    alert("Ist doch leer Mensch...");
  } else {
    aufgabenListe.innerHTML = "";
  }
}

clearButton.addEventListener("click", clearList);
