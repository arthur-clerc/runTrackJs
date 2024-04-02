const button = document.querySelector("#button");

button.addEventListener("click", function () {
  const article = document.querySelector("#article");
  if (article.style.display === "none") {
    article.style.display = "block";
  } else {
    article.style.display = "none";
  }
});
