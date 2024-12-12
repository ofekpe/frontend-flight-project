import Booking from "../classes/booking.js";
import Passenger from "../classes/passenger.js";

const bookings = [
  new Booking("AF1234", [
    new Passenger("John Doe", "A12345678"),
    new Passenger("Jane Doe", "B87654321"),
  ]),
  new Booking("KL5678", [
    new Passenger("Alice Smith", "C12345678"),
    new Passenger("Bob Smith", "D87654321"),
    new Passenger("Charlie Smith", "E12345678"),
  ]),
  new Booking("UA9101", [
    new Passenger("Charlie Brown", "F12345678"),
    new Passenger("Lucy Brown", "G87654321"),
  ]),
  new Booking("SQ2345", [
    new Passenger("David Johnson", "H12345678"),
    new Passenger("Emma Johnson", "I87654321"),
    new Passenger("Sophia Johnson", "J12345678"),
    new Passenger("Liam Johnson", "K87654321"),
  ]),
  new Booking("CX6789", [
    new Passenger("Frank White", "L12345678"),
    new Passenger("Grace White", "M87654321"),
  ]),
  new Booking("QF789", [
    new Passenger("Henry Green", "N12345678"),
    new Passenger("Isabella Green", "O87654321"),
    new Passenger("Olivia Green", "P12345678"),
  ]),
  new Booking("NH123", [
    new Passenger("Jack Black", "Q12345678"),
    new Passenger("Olivia Black", "R87654321"),
  ]),
  new Booking("AA789", [
    new Passenger("Liam Blue", "S12345678"),
    new Passenger("Sophia Blue", "T87654321"),
    new Passenger("Mason Blue", "U12345678"),
  ]),
  new Booking("DL456", [
    new Passenger("Noah Brown", "V12345678"),
    new Passenger("Emma Brown", "W87654321"),
  ]),
  new Booking("AF123", [
    new Passenger("Oliver White", "X12345678"),
    new Passenger("Ava White", "Y87654321"),
    new Passenger("Lucas White", "Z12345678"),
  ]),
];

export default bookings;
