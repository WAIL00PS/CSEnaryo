function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference or use dark mode by default
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  body.classList.add("light-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});
