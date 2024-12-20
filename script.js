<script>
  const mainContent = document.querySelector('.main-content');
  const scrollArrow = document.querySelector('.scroll-arrow');
  const fadeOverlay = document.querySelector('.fade-overlay');

  mainContent.addEventListener('scroll', () => {
    const scrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight;
    const clientHeight = mainContent.clientHeight;

    // Define how close to the bottom the fade-out should start (in pixels)
    const fadeTriggerDistance = 100;

    // Check if nearing the bottom
    if (scrollTop + clientHeight >= scrollHeight - fadeTriggerDistance) {
      scrollArrow.style.opacity = (scrollHeight - scrollTop - clientHeight) / fadeTriggerDistance; // Fade arrow proportionally
      fadeOverlay.style.opacity = (scrollHeight - scrollTop - clientHeight) / fadeTriggerDistance; // Fade overlay proportionally
    } else {
      scrollArrow.style.opacity = 1; // Reset opacity when not near the bottom
      fadeOverlay.style.opacity = 1; // Reset opacity when not near the bottom
    }

    // Fully hide when at the bottom
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollArrow.classList.add('hidden');
      fadeOverlay.classList.add('hidden');
    } else {
      scrollArrow.classList.remove('hidden');
      fadeOverlay.classList.remove('hidden');
    }
  });

  // Initial state check
  const initialCheck = () => {
    const scrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight;
    const clientHeight = mainContent.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollArrow.classList.add('hidden');
      fadeOverlay.classList.add('hidden');
    }
  };

  // Run initial check
  initialCheck();
</script>
