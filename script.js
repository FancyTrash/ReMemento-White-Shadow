const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const closeButton = document.getElementById("closeButton");
const dots = document.querySelector(".dots"); // Get the dots element

// Show the search box and hide the search button
searchButton.addEventListener("click", () => {
  searchButton.style.display = "none"; // Hide search button
  searchBox.style.display = "flex"; // Show search box
});

// Hide the search box and show the search button
closeButton.addEventListener("click", () => {
  searchBox.style.display = "none"; // Hide search box
  searchButton.style.display = "inline-block"; // Show search button
});

// Add functionality for the dots
dots.addEventListener("click", () => {
  // For now, display a simple alert or you can add dropdown functionality
  alert("Dropdown menu will be added here!");
});
