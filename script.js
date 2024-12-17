const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box'); 
const closeButton = document.querySelector('.close-button');
const dots = document.querySelector('.dots');

// Show Search Box
searchButton.addEventListener('click', () => {
  searchButton.style.display = 'none';
  searchBox.classList.add('show');
});

// Hide Search Box
closeButton.addEventListener('click', () => {
  searchBox.classList.remove('show');
  searchButton.style.display = 'inline-block';
});

// Dropdown Menu Placeholder
dots.addEventListener('click', () => {
  alert("Dropdown menu will be added here!");
});
