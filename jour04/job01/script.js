let button = document.querySelector("#button");
let paragraph = document.querySelector("#paragraph");

function changeText() {
  fetch("expression.txt")
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((texte) => {
      document.querySelector("#paragraph").textContent = texte;
      console.log(texte);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération du fichier :", error)
    );
}

button.addEventListener("click", changeText);
