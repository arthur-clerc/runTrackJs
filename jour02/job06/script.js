let konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let userInput = [];

function konamiKeyPressed(event) {
  userInput.push(event.key);

  console.log(userInput);
  console.log(konamiCode);
  const userInputString = userInput.toString();
  const konamiString = konamiCode.slice(-4).toString();

  if (userInputString === konamiString) {
    document.body.classList.add("la-plateforme");
    console.log("Code Konami activé !");
  }
}

document.addEventListener("keydown", konamiKeyPressed);
