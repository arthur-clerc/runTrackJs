const keylogger = document.querySelector("#keylogger");

function addLetter(event) {
  if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
    keylogger.value += event.key;
  }
}

document.addEventListener("keydown", addLetter);