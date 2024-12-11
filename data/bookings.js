import Booking from "../classes/booking.js";
import Passenger from "../classes/passenger.js";

const bookings = [
  new Booking("W61283", [
    new Passenger("John Doe", "A12345678"),
    new Passenger("Jane Doe", "B87654321"),
  ]),
  new Booking("LX8396", [
    new Passenger("Alice Smith", "C12345678"),
    new Passenger("Bob Smith", "D87654321"),
    new Passenger("Charlie Smith", "E12345678"),
  ]),
  new Booking("BA345", [new Passenger("Charlie Brown", "F12345678")]),
  new Booking("EK123", [
    new Passenger("David Johnson", "G12345678"),
    new Passenger("Emma Johnson", "H87654321"),
    new Passenger("Sophia Johnson", "I12345678"),
    new Passenger("Liam Johnson", "J87654321"),
  ]),
  new Booking("LH456", [
    new Passenger("Frank White", "K12345678"),
    new Passenger("Grace White", "L87654321"),
  ]),
  new Booking("QF789", [
    new Passenger("Henry Green", "M12345678"),
    new Passenger("Isabella Green", "N87654321"),
    new Passenger("Olivia Green", "O12345678"),
  ]),
  new Booking("NH123", [
    new Passenger("Jack Black", "P12345678"),
    new Passenger("Olivia Black", "Q87654321"),
  ]),
  new Booking("AA789", [
    new Passenger("Liam Blue", "R12345678"),
    new Passenger("Sophia Blue", "S87654321"),
    new Passenger("Mason Blue", "T12345678"),
  ]),
  new Booking("DL456", [
    new Passenger("Mason Gray", "U12345678"),
    new Passenger("Ava Gray", "V87654321"),
    new Passenger("Noah Gray", "W12345678"),
    new Passenger("Mia Gray", "X87654321"),
    new Passenger("Lucas Gray", "Y12345678"),
  ]),
  new Booking("AF123", [
    new Passenger("Noah Brown", "Z12345678"),
    new Passenger("Mia Brown", "A87654321"),
  ]),
  new Booking("AF1234", [
    new Passenger("Michael Brown", "U12345678"),
    new Passenger("Sarah Brown", "V87654321"),
  ]),
  new Booking("KL5678", [
    new Passenger("Emily Davis", "W12345678"),
    new Passenger("James Davis", "X87654321"),
    new Passenger("Oliver Davis", "Y12345678"),
  ]),
  new Booking("UA9101", [new Passenger("Sophia Wilson", "Z12345678")]),
  new Booking("SQ2345", [
    new Passenger("Liam Martinez", "A23456789"),
    new Passenger("Emma Martinez", "B98765432"),
    new Passenger("Noah Martinez", "C23456789"),
    new Passenger("Ava Martinez", "D98765432"),
  ]),
  new Booking("CX6789", [
    new Passenger("Lucas Anderson", "E23456789"),
    new Passenger("Mia Anderson", "F98765432"),
  ]),
  new Booking("QF1234", [
    new Passenger("Ethan Thomas", "G23456789"),
    new Passenger("Isabella Thomas", "H98765432"),
    new Passenger("Charlotte Thomas", "I23456789"),
  ]),
  new Booking("NH5678", [
    new Passenger("Mason Jackson", "J23456789"),
    new Passenger("Amelia Jackson", "K98765432"),
  ]),
  new Booking("AA9101", [
    new Passenger("Logan White", "L23456789"),
    new Passenger("Sophia White", "M98765432"),
    new Passenger("Lucas White", "N23456789"),
  ]),
  new Booking("DL2345", [
    new Passenger("Benjamin Harris", "O23456789"),
    new Passenger("Ella Harris", "P98765432"),
  ]),
];

export default bookings;
