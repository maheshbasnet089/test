// Q9 Create a login UI using any ui framework and write a program according to the following
// instructions to authenticate the user

const user = [
  {
    id: "user@gmail.com",
    password: "password",
  },
];

const form = document.getElementById("login");
const small = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userid = form.elements["UserId"].value;
  let password = form.elements["password"].value;
  if (userid === user[0].id && password == user[0].password) {
    small.innerText = "Correct Credentials";
  } else {
    small.innerText = "Wrong credentials";
  }
});
