// JavaScript by Cameron Gibson, 2026

function initialize() {
    cities();
}

function cities() {
    var cityPop = [
        { city: 'Madison', population: 233209 },
        { city: 'Milwaukee', population: 594833 },
        { city: 'Green Bay', population: 104057 },
        { city: 'Superior', population: 27244 }
    ];

    var table = document.createElement("table");
    var headerRow = document.createElement("tr");

    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");
    table.appendChild(headerRow);

    cityPop.forEach(function(cityObject) {
        var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
        table.insertAdjacentHTML("beforeend", rowHtml);
    });

    document.querySelector("#mydiv").appendChild(table);
}

document.addEventListener("DOMContentLoaded", initialize);