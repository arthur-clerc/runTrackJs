const button = document.querySelector("#button");
const compteur = document.querySelector("#count");

function addOne() {
  let count = parseInt(compteur.textContent) || 0;
  compteur.textContent = count + 1;
}

button.addEventListener("click", function () {
  if (compteur.style.display === "none") {
    compteur.style.display = "block";
  } else {
    compteur.style.display = "none";
  }
});

button.addEventListener("click", addOne);
