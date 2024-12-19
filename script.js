// Search box toggle
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const closeButton = document.getElementById("closeButton");

searchButton.addEventListener("click", () => {
  searchBox.style.display = "flex";
  searchButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  searchBox.style.display = "none";
  searchButton.style.display = "inline-block";
});

// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const closeSidebar = document.getElementById("closeSidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.style.right = "0";
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.right = "-300px";
});
