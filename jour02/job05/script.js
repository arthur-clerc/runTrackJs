const footer = document.querySelector("#footer");

function revealOnScroll() {
  const scrollPercentage =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  console.log("Pourcentage de défilement :", scrollPercentage);
  footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
}

document.addEventListener("scroll", revealOnScroll);
