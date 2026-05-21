// JavaScript by Cameron Gibson, 2026

// Debugging Notes:
// Fixed issues with table generation and event handling.
// Added city size classification logic.
// Verified hover and click interactions.
// Used console testing to remove errors.

// Initialize script after DOM loads
function initialize() {
    cities();
}

// Function to create the city table
function cities() {

    // Array of city objects
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    // Create table element
    var table = document.createElement("table");

    // Create header row
    var headerRow = document.createElement("tr");

    // Add headers
    headerRow.insertAdjacentHTML(
        "beforeend",
        "<th>City</th><th>Population</th><th>City Size</th>"
    );

    table.appendChild(headerRow);

    // Loop through city data
    for (var i = 0; i < cityPop.length; i++) {

        // Determine city size using conditionals
        var citySize;

        if (cityPop[i].population < 100000) {
            citySize = 'Small';
        } else if (cityPop[i].population < 500000) {
            citySize = 'Medium';
        } else {
            citySize = 'Large';
        }

        // Create row HTML
        var rowHtml =
            "<tr>" +
            "<td>" + cityPop[i].city + "</td>" +
            "<td>" + cityPop[i].population + "</td>" +
            "<td>" + citySize + "</td>" +
            "</tr>";

        // Add row to table
        table.insertAdjacentHTML('beforeend', rowHtml);
    }

    // Add table to webpage
    document.querySelector("#mydiv").appendChild(table);

    // Add interactions
    addEvents();
}

// Add hover and click events
function addEvents() {

    var rows = document.querySelectorAll("tr");

    for (var i = 1; i < rows.length; i++) {

        // Hover effect
        rows[i].addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        rows[i].addEventListener("mouseout", function() {
            this.style.color = "black";
        });

        // Click interaction
        rows[i].addEventListener("click", function() {

            var cityName = this.cells[0].innerHTML;

            alert("You clicked on " + cityName);

        });
    }
}

// Run initialize after DOM loads
document.addEventListener("DOMContentLoaded", initialize);