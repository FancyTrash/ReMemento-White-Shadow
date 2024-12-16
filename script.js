const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box'); 
const closeButton = document.querySelector('.close-button');
const dots = document.querySelector('.dots');

searchButton.addEventListener('click', () => {
  searchButton.style.display = 'none';
  searchBox.style.display = 'inline-block';
});

closeButton.addEventListener('click', () => {
  searchBox.style.display = 'none';
  searchButton.style.display = 'inline-block';
});

dots.addEventListener('click', () => {
  // Your dropdown menu code here
  alert("Dropdown menu will be added here!");
});
