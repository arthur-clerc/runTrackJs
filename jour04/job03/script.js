let filter = document.querySelector("#filter");
let id = document.querySelector("#id");
let nom = document.querySelector("#nom");
let select = document.querySelector("#select");

async function loadData() {
  try {
    const response = await fetch("assets/pokemon.json");
    const data = await response.json();
    console.log(data);
    let typesSet = new Set();
    console.log(typesSet);

    data.forEach((item) => {
      typesSet.add(item.type);
    });

    data.forEach((pokemon) => {
      pokemon.type.forEach((type) => {
        typesSet.add(type);
      });
    });

    typesSet.forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      document.querySelector("#select").appendChild(option);
      console.log(option);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du JSON:", error);
  }
}

filter.addEventListener("click", loadData);

function filterAndDisplay(data) {
  console.log(data);
  switch (selectValue) {
    case "id":
      filteredData = data.filter((item) => item.id == idValue);
      break;
    case "name":
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(nomValue.toLowerCase())
      );
      break;
    default:
      filteredData = data;
  }
  console.log("Affichage des données filtrées", data);
}
