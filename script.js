const scrollArrow = document.getElementById("scrollArrow");
const mainContent = document.querySelector(".main-content");

// Show the arrow when the page is scrollable
window.addEventListener("scroll", () => {
    const scrollHeight = mainContent.scrollHeight;
    const scrollTop = window.pageYOffset;
    const clientHeight = window.innerHeight;

    // Show the arrow if the user can still scroll down
    if (scrollTop + clientHeight < scrollHeight - 20) {
        scrollArrow.style.opacity = 1;
    } else {
        scrollArrow.style.opacity = 0; // Fade it out when at the bottom
    }
});

// Add scroll behavior when clicking the arrow
scrollArrow.addEventListener("click", () => {
    window.scrollBy(0, 100); // Scroll down by 100px
});
