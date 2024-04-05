let button = document.querySelector("#button");
let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let valueEmail = document.querySelector("#email").value;
  let valuePassword = document.querySelector("#password").value;

  let formData = {
    email: valueEmail,
    password: valuePassword,
  };

  let data = JSON.parse(localStorage.getItem("usersData"));

  if (!data) {
    data = { users: [] };
  }

  data.users.push(formData);

  localStorage.setItem("usersdata", JSON.stringify(data));
});

let un = 1;

console.log(un);
