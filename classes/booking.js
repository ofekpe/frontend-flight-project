class BookingSystem {
    constructor(formId, passengerDetailsDivId, bookingListId) {
        this.form = document.getElementById(formId);
        this.passengerDetailsDiv = document.getElementById(passengerDetailsDivId);
        this.bookingList = document.getElementById(bookingListId);

        this.init();
    }

    // Initialize event listeners
    init() {
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    // Dynamically add passenger input fields
    addPassengerFields() {
        const passengerCount = document.getElementById('passengerCount').value;
        this.passengerDetailsDiv.innerHTML = ''; // Clear previous inputs
        for (let i = 1; i <= passengerCount; i++) {
            const passengerHTML = `
                <div class="form-group">
                    <label for="passengerName${i}">Passenger ${i} Name</label>
                    <input type="text" id="passengerName${i}" name="passengerName${i}" placeholder="Full Name" required>
                </div>
                <div class="form-group">
                    <label for="passport${i}">Passenger ${i} Passport Number</label>
                    <input type="text" id="passport${i}" name="passport${i}" placeholder="Passport Number" required>
                </div>
            `;
            this.passengerDetailsDiv.innerHTML += passengerHTML;
        }
    }

    // Handle form submission
    handleSubmit(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const flightNumber = document.getElementById('flightNumber').value;
        const passengerCount = document.getElementById('passengerCount').value;
        const passengers = [];

        for (let i = 1; i <= passengerCount; i++) {
            const name = document.getElementById(`passengerName${i}`).value;
            const passport = document.getElementById(`passport${i}`).value;
            passengers.push({ name, passport });
        }

        // Add booking details to the list
        const bookingDetails = `
            <li>
                <strong>Flight Number:</strong> ${flightNumber}<br>
                <strong>Passengers:</strong> ${passengers.map(p => `${p.name} (${p.passport})`).join(', ')}
            </li>
        `;
        this.bookingList.innerHTML += bookingDetails;

        // Clear form
        this.form.reset();
        this.passengerDetailsDiv.innerHTML = '';
    }
}

// Initialize the booking system
const bookingSystem = new BookingSystem('bookingForm', 'passengerDetails', 'bookingList');

// Add passenger fields dynamically
document.querySelector('button[onclick="addPassengerFields()"]').onclick = function () {
    bookingSystem.addPassengerFields();
};
