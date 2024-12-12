document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const flightDetails = {
    flightNumber: urlParams.get("flightNumber"),
    origin: urlParams.get("origin"),
    boardingDate: urlParams.get("boardingDate"),
    boardingTime: urlParams.get("boardingTime"),
    destination: urlParams.get("destination"),
    arrivalDate: urlParams.get("arrivalDate"),
    arrivalTime: urlParams.get("arrivalTime"),
    maxPassengers: urlParams.get("seatCount"),
  };

  // Always display first flight's details
  document.getElementById("origin").textContent = flightDetails.origin;
  document.getElementById(
    "boarding-date-time"
  ).textContent = `${flightDetails.boardingDate} ${flightDetails.boardingTime}`;
  document.getElementById("destination").textContent =
    flightDetails.destination;
  document.getElementById(
    "arrival-date-time"
  ).textContent = `${flightDetails.arrivalDate} ${flightDetails.arrivalTime}`;

  const passengerCountInput = document.getElementById("passenger-count");
  const passengerDetailsContainer =
    document.getElementById("passenger-details");
  const validationErrorsContainer =
    document.getElementById("validation-errors");
  const form = document.getElementById("flight-booking-form");

  // Dynamic passenger details generation
  passengerCountInput.addEventListener("input", () => {
    const count = parseInt(passengerCountInput.value, 10);
    passengerDetailsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const passengerDiv = document.createElement("div");
      passengerDiv.classList.add("form-group");
      passengerDiv.innerHTML = `
                <h3>Passenger ${i + 1}</h3>
                <label for="passenger-name-${i}">Full Name:</label>
                <input type="text" id="passenger-name-${i}" required>
                
                <label for="passenger-email-${i}">Email:</label>
                <input type="email" id="passenger-email-${i}" required>
                
                <label for="passport-id-${i}">Passport ID:</label>
                <input type="text" id="passport-id-${i}" required>
                
                <label for="birth-date-${i}">Birth Date:</label>
                <input type="date" id="birth-date-${i}" required>
            `;
      passengerDetailsContainer.appendChild(passengerDiv);
    }
  });

  // Form submission with comprehensive validation
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validationErrorsContainer.innerHTML = ""; // Clear previous errors

    const passengers = [];
    const passportIds = new Set();
    const errors = [];

    // Validate passenger count
    const passengerCount = parseInt(passengerCountInput.value, 10);
    if (passengerCount > flightDetails.maxPassengers) {
      errors.push(
        `Number of passengers cannot exceed ${flightDetails.maxPassengers}`
      );
    }

    // Validate each passenger's details
    for (let i = 0; i < passengerCount; i++) {
      const name = document.getElementById(`passenger-name-${i}`).value.trim();
      const email = document
        .getElementById(`passenger-email-${i}`)
        .value.trim();
      const passportId = document
        .getElementById(`passport-id-${i}`)
        .value.trim();
      const birthDate = document.getElementById(`birth-date-${i}`).value;

      // Detailed validations
      if (!name) errors.push(`Passenger ${i + 1}: Name is required`);
      if (!email || !/\S+@\S+\.\S+/.test(email))
        errors.push(`Passenger ${i + 1}: Invalid email format`);
      if (!passportId)
        errors.push(`Passenger ${i + 1}: Passport ID is required`);

      // Check passport ID uniqueness
      if (passportIds.has(passportId)) {
        errors.push(`Passenger ${i + 1}: Duplicate Passport ID`);
      } else {
        passportIds.add(passportId);
      }

      if (!birthDate) errors.push(`Passenger ${i + 1}: Birth date is required`);

      passengers.push({ name, email, passportId, birthDate });
    }

    // Display or process results
    if (errors.length > 0) {
      // Display validation errors
      errors.forEach((error) => {
        const errorEl = document.createElement("p");
        errorEl.textContent = error;
        errorEl.classList.add("error-message");
        validationErrorsContainer.appendChild(errorEl);
      });
    } else {
      // Successful booking
      const bookingDetails = {
        ...flightDetails,
        passengers,
      };

      // Simulated booking save
      console.log("Booking saved successfully:", bookingDetails);

      // Show success message
      alert("Booking saved successfully!");

      // Redirect to My Bookings page
      window.location.href = "/bookings/my-bookings.html";
    }
  });
});
