// Select the necessary DOM elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the sidebar menu on button click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
  // Change the icon based on the open state
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the sidebar when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Close the sidebar when clicking outside of it
window.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Smooth scrolling to sections when clicking on links
document.querySelectorAll('.nav__links a').forEach(link => {
  // Skip links with '.html' in their href attribute
  if (link.getAttribute('href').includes('html')) return;
  
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    
    const targetId = this.getAttribute('href'); // Get the target section
    const targetElement = document.querySelector(targetId); // Find the target element
    
    if (targetElement) {
      targetElement.scrollIntoView({ // Scroll smoothly to the section
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close the menu (for mobile views)
      const navLinks = document.getElementById('nav-links');
      const menuBtnIcon = document.querySelector('#menu-btn i'); // Assuming the menu button icon

      navLinks.classList.remove('active'); // Remove the 'active' class to close the menu
      menuBtnIcon.setAttribute('class', 'ri-menu-line'); // Reset menu icon
    }
  });
});


// ScrollReveal for animations (Optional)
// Adjust as necessary if you are using ScrollReveal.js
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", scrollRevealOption);
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content .header__btn", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__card", { duration: 1000, interval: 500 });
ScrollReveal().reveal(".trainer__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });

// Swiper initialization (Optional)
// Adjust as necessary if you are using Swiper.js
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
