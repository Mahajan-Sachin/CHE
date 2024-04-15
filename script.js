// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Population data for certain years
    var populationData = [
        { year: 2020, population: 7837000000 },
        { year: 2030, population: 8500000000 },
        { year: 2040, population: 9200000000 },
        { year: 2050, population: 9800000000 }
    ];

    // Function to display population data
    function displayPopulationData() {
        var populationContainer = document.getElementById("population-data");
        populationContainer.innerHTML = "<h3>Population Data</h3>";

        populationData.forEach(function(data) {
            populationContainer.innerHTML += "<p>Year " + data.year + ": " + data.population.toLocaleString() + " people</p>";
        });
    }

    // Function to show the popup
    function showPopup() {
        var popup = document.getElementById("info-popup");
        popup.style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementById("info-popup");
        popup.style.display = "none";
    }

    // Event listener for clicking the icon
    var icon = document.getElementById("info-icon");
    icon.addEventListener("click", showPopup);

    // Event listener for clicking the close button
    var closeBtn = document.getElementById("close-popup");
    closeBtn.addEventListener("click", closePopup);

    // Display population data
    displayPopulationData();
});

