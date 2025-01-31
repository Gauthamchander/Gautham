
  const header = document.getElementById('sticky-header');
  let lastScrollY = 0;
    
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    // Check if the user has scrolled beyond the first fold (e.g., 150px)
    if (window.scrollY > 200) {
      header.classList.add('scrolled'); // Add the class for the new background
    } else {
      header.classList.remove('scrolled'); // Remove the class when scrolled back up
    }
    lastScrollY = currentScrollY;
  });

  const scrollContainer = document.querySelector('.image-scroll');
  const images = scrollContainer.querySelectorAll('img');
  
  // Duplicate images to ensure seamless scrolling
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    scrollContainer.appendChild(clone);
  });
  