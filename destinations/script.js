import destinations from "../data/destinations.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  destinations.forEach((destination) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${destination.name}</td>
      <td>${destination.airportName}</td>
      <td><a href="${destination.airportUrl}" target="_blank">Visit Website</a></td>
      <td>${destination.email}</td>
      <td>${destination.code}</td>
      <td><img src="${destination.imageUrl}" alt="${destination.airportName}" /></td>
    `;

    tableBody.appendChild(row);
  });
});
