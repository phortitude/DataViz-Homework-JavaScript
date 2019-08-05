// from data.js
var tableData = data;
var tbody = d3.select("tbody"); 

// YOUR CODE HERE!

// // Step 1: Loop Through `tableData` and console.log each ufo sighting object
// tableData.forEach(function(sightingReport) {
//   console.log(sightingReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each sighting report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// tableData.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each sighting report value
// tableData.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per sighting report value (date, city, state, country, shape, duration, comments)
// tableData.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the sighting report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// sighting report values (date, city, state, country, shape, duration, comments)
tableData.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");
  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the sighting report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create on change event to capture new search inquiry
var inputBox = d3.select("#datetime");
function newInquiry(date) {
    // grabe the value of the input box field
    var inquery = d3.event.target.value;
    
    console.log(inquery); 
}

inputBox.on("change", newInquiry); 

// Create on click event

var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime"); 

    // get the value property of the input element
    var inputValue = inputElement.property("value"); 

    console.log(inputValue);

    var filteredData = tableData.filter(function (sighting) {

        return sighting.datetime === inputValue; 
        console.log(filteredData); 
    })


}); 

