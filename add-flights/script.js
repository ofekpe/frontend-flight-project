import destinations from "../data/destinations.js";
import Flight from "../classes/flight.js";

document.addEventListener("DOMContentLoaded", () => {
  const originSelect = document.getElementById("origin");
  const destinationSelect = document.getElementById("destination");

  destinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination.code;
    option.textContent = `${destination.name} (${destination.code})`;
    originSelect.appendChild(option.cloneNode(true));
    destinationSelect.appendChild(option);
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const flightNumber = document.getElementById("flight-number").value;
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const boardingDate = document.getElementById("boarding-date").value;
    const boardingTime = document.getElementById("boarding-time").value;
    const arrivalDate = document.getElementById("arrival-date").value;
    const arrivalTime = document.getElementById("arrival-time").value;
    const seatCount = document.getElementById("seat-count").value;

    const newFlight = new Flight(
      flightNumber,
      origin,
      destination,
      boardingDate,
      boardingTime,
      arrivalDate,
      arrivalTime,
      seatCount
    );

    console.log("New flight added:", newFlight);
    // Here you can add code to save the new flight to your data store
  });
});
