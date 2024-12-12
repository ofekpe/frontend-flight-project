import destinations from "../data/destinations.js";
import flights from "../data/flights.js";

document.addEventListener("DOMContentLoaded", () => {
  const originSelect = document.getElementById("filter-origin");
  const destinationSelect = document.getElementById("filter-destination");
  const tableBody = document.querySelector("tbody");

  // Create a Set to store unique destination codes
  const uniqueDestinations = new Set();

  // Populate origin and destination select elements with unique destinations
  destinations.forEach((destination) => {
    uniqueDestinations.add(destination.code);
  });

  uniqueDestinations.forEach((code) => {
    const destination = destinations.find((dest) => dest.code === code);
    const option = document.createElement("option");
    option.value = destination.code;
    option.textContent = `${destination.name} (${destination.code})`;
    originSelect.appendChild(option.cloneNode(true));
    destinationSelect.appendChild(option);
  });

  // Function to display flights
  const displayFlights = (filteredFlights) => {
    tableBody.innerHTML = "";
    filteredFlights.forEach((flight) => {
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
                <td><button class="book-button" data-seat-count="${flight.seatCount}" data-flight-number="${flight.flightNumber}" data-origin="${flight.originCode}" data-boarding-date="${flight.boardingDate}" data-boarding-time="${flight.boardingTime}" data-destination="${flight.destinationCode}" data-arrival-date="${flight.arrivalDate}" data-arrival-time="${flight.arrivalTime}">Book</button></td>
            `;
      tableBody.appendChild(row);
    });
  };

  // Initial display of all flights
  displayFlights(flights);

  // Filter flights based on origin and destination
  document.getElementById("filter-button").addEventListener("click", () => {
    const selectedOrigin = originSelect.value;
    const selectedDestination = destinationSelect.value;

    const filteredFlights = flights.filter((flight) => {
      return (
        (selectedOrigin === "" || flight.originCode === selectedOrigin) &&
        (selectedDestination === "" ||
          flight.destinationCode === selectedDestination)
      );
    });

    displayFlights(filteredFlights);
  });

  // Handle booking action
  tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("book-button")) {
      const flightNumber = event.target.getAttribute("data-flight-number");
      const origin = event.target.getAttribute("data-origin");
      const boardingDate = event.target.getAttribute("data-boarding-date");
      const boardingTime = event.target.getAttribute("data-boarding-time");
      const destination = event.target.getAttribute("data-destination");
      const arrivalDate = event.target.getAttribute("data-arrival-date");
      const arrivalTime = event.target.getAttribute("data-arrival-time");
      const seatCount = event.target.getAttribute("data-seat-count");

      const url = `/flight-authorization/flight-authorization.html?flightNumber=${flightNumber}&origin=${origin}&boardingDate=${boardingDate}&boardingTime=${boardingTime}&destination=${destination}&arrivalDate=${arrivalDate}&arrivalTime=${arrivalTime}&seatCount=${seatCount}`;
      window.location.href = url;
    }
  });
});
