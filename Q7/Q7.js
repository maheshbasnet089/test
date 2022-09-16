// Q7. Write a program where you take inputs from a student about their name, age, education,
// and phone number and store it as an object in an array

function student() {
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");
  let education = prompt("Enter your education");
  let phoneNumber = prompt("Enter your phoneNumber");

  const studentData = [
    {
      name,
      age,
      education,
      phoneNumber,
    },
  ];
  //  console.log(studentData);
}

student();
