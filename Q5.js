// Q5 Write a program to calculate the simple interest on Rs 500 for 5 years at 5 percent.
function calculateSimpleInterest(principal, time, rate) {
  let SI = (principal * time * rate) / 100;
  console.log(SI);
}

calculateSimpleInterest(500, 5, 5);
