// Get references to the DOM elements
const messageElement = document.getElementById("message");
const updateButton = document.getElementById("updateButton");

// Add a click event listener to the button
updateButton.addEventListener("click", function() {
    messageElement.textContent = "You clicked the button!";
});