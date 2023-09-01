// Add an event listener to the "Convert to cm" button
document.getElementById("submit").addEventListener("click", heightConverter);

// Function that performs the height conversion
function heightConverter() {
    // Get the values entered for feet and inches
    var feet = parseInt(document.getElementById("feet").value);
    var inches = parseInt(document.getElementById("inches").value);

    // Convert feet and inches to centimeters
    var cm = (feet * 12 + inches) * 2.54;

    // Define the number of decimal places for rounding
    var decimalPlaces = 2;

    // Round the centimeter value to the desired decimal places
    var n = cm.toFixed(decimalPlaces);

    // Display the result in the "result" div
    document.getElementById("result").innerHTML = n;
}
