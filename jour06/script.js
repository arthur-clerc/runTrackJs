let leftArrow = document.querySelector("#leftArrow");
let progress = document.querySelector(".progress-bar");
let rightArrow = document.querySelector("#rightArrow");
let button = document.querySelector("#button");
let lead = document.querySelector(".lead");
let leadTwo = document.querySelector(".leadTwo");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

function test() {
  let currentWidth = parseInt(progress.style.width);
  if (currentWidth - 5 >= 0) {
    progress.style.width = currentWidth - 5 + "%";
  }
  return currentWidth;
}

leftArrow.addEventListener("click", test);

rightArrow.addEventListener("click", function () {
  console.log(test());
  currentWidth
  if (currentWidth + 5 >= 0) {
    progress.style.width = currentWidth + 5 + "%";
  }
});

button.addEventListener("click", function () {
  lead.innerHTML = "La pere de jonathan est un vieux porc";
});

one.addEventListener("click", function () {
  lead.innerHTML = "La pere de jonathan est un vieux porc";
});

two.addEventListener("click", function () {
  lead.innerHTML = "La pere de jonathan est un vieux porc";
});

three.addEventListener("click", function () {
  lead.innerHTML = "La pere de jonathan est un vieux porc";
});
