document.addEventListener("DOMContentLoaded", () => {
  /* THEME TOGGLE (default dark) */
  const toggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  toggle.onclick = () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  };

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });
  reveals.forEach(r => observer.observe(r));

  /* FORM HANDLING */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Request sent successfully!");
  });

  /* NAV SMOOTH SCROLL */
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
