import flights from "../data/flights.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  flights.forEach((flight) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${flight.flightNumber}</td>
      <td>${flight.originCode}</td>
      <td>${flight.destinationCode}</td>
      <td>${flight.boardingDate}</td>
      <td>${flight.boardingTime}</td>
      <td>${flight.arrivalDate}</td>
      <td>${flight.arrivalTime}</td>
      <td>${flight.seatCount}</td>
    `;

    tableBody.appendChild(row);
  });
});
