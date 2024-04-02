document.addEventListener("DOMContentLoaded", function () {
  function citation() {
    var text = document.querySelector("#citation").innerText;
    console.log(text);
  }

  document.querySelector("#button").addEventListener("click", citation);
});
