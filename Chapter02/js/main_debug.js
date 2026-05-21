// JavaScript by Cameron Gibson, 2026

// This function runs when the page has finished loading.
function initialize() {
    cities();
}

// This function creates a table showing city and population data.
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

    for (var i = 0; i < cityPop.length; i++) {
        var cityName;

        if (cityPop[i].city == 'Madison') {
            cityName = 'Badgerville';
        } else if (cityPop[i].city == 'Green Bay') {
            cityName = 'Packerville';
        } else {
            cityName = cityPop[i].city;
        }

        var popValue;

        if (cityPop[i].population < 500000) {
            popValue = cityPop[i].population;
        } else {
            popValue = 'Too big!';
        }

        var rowHtml = "<tr><td>" + cityName + "</td><td>" + popValue + "</td></tr>";
        table.insertAdjacentHTML("beforeend", rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);

    addEvents();
}

// This function adds hover and click interactions to each city row.
function addEvents() {
    var rows = document.querySelectorAll("tr");

    for (var i = 1; i < rows.length; i++) {
        rows[i].addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        rows[i].addEventListener("mouseout", function() {
            this.style.color = "black";
        });

        rows[i].addEventListener("click", function() {
            alert("You clicked a city row.");
        });
    }
}

document.addEventListener("DOMContentLoaded", initialize);