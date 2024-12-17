const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const closeButton = document.getElementById("closeButton");
const dots = document.getElementById("dots"); // Dots element
const dropdownMenu = document.getElementById("dropdownMenu"); // Dropdown menu

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

// Toggle the visibility of the dropdown menu when dots are clicked
dots.addEventListener("click", () => {
  // Toggle dropdown visibility
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});
