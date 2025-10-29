export function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const dropdown = toggle.parentElement;

      document.querySelectorAll('.dropdown.open').forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('open');
        }
      });
      dropdown.classList.toggle("open");
    });
  });

  window.addEventListener("click", (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
      document.querySelectorAll('.dropdown.open').forEach((dropdown) => {
        dropdown.classList.remove('open');
      });
    }
  });

  document.body.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && !navToggle.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  });
}