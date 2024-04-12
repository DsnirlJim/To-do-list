const addButton = document.getElementById("add-btn");
const aufgabenListe = document.getElementById("item-list");
const textFeld = document.getElementById("add");

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
