class Flight {
  constructor(
    flightNumber,
    originCode,
    destinationCode,
    boardingDate,
    boardingTime,
    arrivalDate,
    arrivalTime,
    seatCount
  ) {
    this.flightNumber = flightNumber;
    this.originCode = originCode;
    this.destinationCode = destinationCode;
    this.boardingDate = boardingDate;
    this.boardingTime = boardingTime;
    this.arrivalDate = arrivalDate;
    this.arrivalTime = arrivalTime;
    this.seatCount = seatCount;
  }
}

export default Flight;
