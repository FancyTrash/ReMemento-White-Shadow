const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box');
const closeButton = document.querySelector('.close-button');

// Show the Search Box
searchButton.addEventListener('click', () => {
  searchBox.style.display = 'flex'; // Make the search box visible
  searchBox.classList.add('show'); // Smooth opacity transition
  searchButton.style.display = 'none'; // Hide the search button
});

// Hide the Search Box
closeButton.addEventListener('click', () => {
  searchBox.style.display = 'none'; // Hide the search box
  searchBox.classList.remove('show'); // Remove smooth transition class
  searchButton.style.display = 'inline-block'; // Show the search button
});
