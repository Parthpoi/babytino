document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; // Offset for sticky header
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  document.querySelector('#contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
  });

  // Tooltip for Live Chat
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

});
