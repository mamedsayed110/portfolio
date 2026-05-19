// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1900);
});
// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  setTimeout(() => {
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  }, 80);
});
document
  .querySelectorAll(
    "a, button, .skill-item, .project-card, .service-card, .exp-card",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2)";
      ring.style.transform = "translate(-50%,-50%) scale(1.4)";
      ring.style.opacity = "0.3";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.opacity = "0.6";
    });
  });
// Theme toggle
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
let isDark = true;
themeBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );
  themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
});
// Hamburger
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});
// Back to top
const backtop = document.getElementById("backtop");
window.addEventListener("scroll", () => {
  backtop.classList.toggle("show", window.scrollY > 400);
});
// Typing animation
const phrases = [
  "Front-End Developer",
  "Bug Bounty Hunter",
  "MEAN Stack Trainee",
  "CS Graduate",
];
let pi = 0,
  ci = 0,
  deleting = false;
const typingEl = document.getElementById("typingText");
function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    typingEl.textContent = phrase.slice(0, ci + 1);
    ci++;
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = phrase.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 110);
}
type();
// Intersection observer for reveals
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((r) => observer.observe(r));
// Progress bars
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".skills-bars")
  .forEach((el) => barObserver.observe(el));
// Form submit
function handleFormSubmit(btn) {
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = "linear-gradient(135deg, #4ade80, #22c55e)";
  btn.style.color = "#0d1117";
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = "";
    btn.style.color = "";
  }, 3000);
}
