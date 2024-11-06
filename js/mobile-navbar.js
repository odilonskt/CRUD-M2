document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  mobileMenuButton.addEventListener("click", () => {
      navList.classList.toggle("active");
      mobileMenuButton.classList.toggle("active");
  });
});

