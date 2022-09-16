function greetUser() {
  let user = prompt("Enter your name");
  if (user != null) {
    document.write("Hello " + user);
  }
}
greetUser();
