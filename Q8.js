// Q8 Get the passengers' names and add them to a new array using the data provided and
// display the result.
const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
];

const passengerName = passengers.map((passenger) => {
  return passenger.passengerName;
});
console.log(passengerName);
