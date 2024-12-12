import bookings from "../data/bookings.js";
import flights from "../data/flights.js";
import destinations from "../data/destinations.js";

document.addEventListener("DOMContentLoaded", () => {
  const bookingsContainer = document.getElementById("bookings-container");
  console.log(bookings);
  bookings.forEach((booking) => {
    const flight = flights.find((f) => f.flightNumber === booking.flightNumber);
    console.log(booking);
    const originDestination = destinations.find(
      (d) => d.code === flight.originCode
    );
    const destinationDestination = destinations.find(
      (d) => d.code === flight.destinationCode
    );

    console.log(originDestination);
    const bookingDiv = document.createElement("div");
    bookingDiv.classList.add("booking");

    bookingDiv.innerHTML = `
        <div class="flex" style="gap: 10px; ">
            <div  class="booking-image">
                <img style="max-width: 200px" src="${destinationDestination.imageUrl}" alt="${destinationDestination.name}">
            </div>
            <div class="booking-info">
                <p><strong>Origin:</strong> ${originDestination?.name} (${flight?.originCode})</p>
                <p><strong>Boarding Date and Time:</strong> ${flight.boardingDate} ${flight.boardingTime}</p>
                <p><strong>Destination:</strong> ${destinationDestination.name} (${flight.destinationCode})</p>
                <p><strong>Arrival Date and Time:</strong> ${flight.arrivalDate} ${flight.arrivalTime}</p>
                <p><strong>No. of Passengers:</strong> ${booking.passengers.length}</p>
            </div>
            </div>
        `;

    bookingsContainer.appendChild(bookingDiv);
  });
});
