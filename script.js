const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.setAttribute(
      "aria-expanded",
      navToggle.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-toggle") && !e.target.closest(".main-nav")) {
      navMenu.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      navMenu.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
// Highlight current page link
const navLinks = document.querySelectorAll(".main-nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.body.appendChild(modal);

const modalImg = modal.querySelector(".modal-img");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-desc");
const closeBtn = modal.querySelector(".close-btn");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalImg.src = card.querySelector("img").src;
    modalTitle.textContent = card.querySelector("h4").textContent;
    modalDesc.textContent =
      card.querySelector("p")?.textContent || "Project details coming soon.";
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
document.getElementById("printBtn")?.addEventListener("click", function (e) {
  e.preventDefault();
  window.print();
});

document.querySelector(".nav-toggle")?.addEventListener("click", function () {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;
  nav.classList.toggle("active");
});

document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("loading", "lazy");
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.setAttribute(
      "aria-expanded",
      this.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-toggle") && !e.target.closest(".main-nav")) {
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
