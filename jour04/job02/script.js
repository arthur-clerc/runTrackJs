function jsonValueKey(jsonString, key) {
  const objet = JSON.parse(jsonString);
  return objet[key];
}

const jsonString =
  '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const key = "city";

const value = jsonValueKey(jsonString, key);
console.log(value);
