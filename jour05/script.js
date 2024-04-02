let formulaire = document.querySelector("#formulaire");
let inputLastName = document.querySelector("#lastName");
let inputFirstName = document.querySelector("#firstName");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputAdress = document.querySelector("#adress");
let inputPostalCode = document.querySelector("#postalCode");

inputEmail.addEventListener("input", async function () {
  let existingError = document.querySelector(".toShort");

  if (inputEmail.value.length < 10 && inputPassword.value.length < 12) {
    if (!existingError) {
      const divToShort = document.createElement("div");
      divToShort.className = "toShort";
      divToShort.innerHTML = `<p>La taille de votre email est trop petite</p>`;
      document.querySelector(".email").appendChild(divToShort);
    }
  } else if (existingError) {
    existingError.remove();
  }
});

formulaire.addEventListener("submit", function (event) {
  let allInput = this.querySelectorAll("input");
  let prohibitedCaractere = /[&<>"']/;
  let isValide = true;
  let errorMessage = document.getElementById("errorMessage");

  allInput.forEach(function (input) {
    if (prohibitedCaractere.test(input.value)) {
      isValide = false;
      console.error("Les caractère ne sont pas autoriser");
      if (!errorMessage) {
        errorMessage = document.createElement("div");
        errorMessage.id = "error-message";
        input.parentNode.insertBefore(errorMessage, input.nextSibling);
      }
      errorMessage.textContent =
        "Le formulaire contient des caractères interdits.";
    }
  });
  if (!isValide) {
    event.preventDefault();
  }
});
