"use strict";

/* Public site configuration; keep the static HTML links and metadata in sync.
   No API keys belong here. This file is public and never calls an AI service.
   Also update the canonical and og:url values in index.html; crawlers
   should receive the real URL in the original HTML, even without JavaScript. */
const CONFIG = Object.freeze({
  githubUrl: "https://github.com/Adelin23/half-story",
  email: "adelin.toader@student.upg-ploiesti.ro",
  siteUrl: "https://adelin23.github.io/half-story/"
});

document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("main-navigation");
const header = document.getElementById("site-header");
const mobileQuery = window.matchMedia("(max-width: 900px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setMenu(open, returnFocus = false) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", open);
  if (returnFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const wasOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenu(false);
  if (wasOpen && link.hash.length > 1) {
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.setAttribute("tabindex", "-1");
      window.requestAnimationFrame(() => destination.focus({ preventScroll: true }));
    }
  } else if (wasOpen && link.hasAttribute("data-github")) {
    menuToggle.focus();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false, true);
  }
});
document.addEventListener("click", (event) => {
  if (!header.contains(event.target) && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }
});
// A dropdown follows normal tab order; it is not a modal and does not trap focus.
document.addEventListener("focusin", (event) => {
  if (!header.contains(event.target) && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }
});
mobileQuery.addEventListener("change", () => setMenu(false));

let scrollPending = false;
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
  scrollPending = false;
}
window.addEventListener("scroll", () => {
  if (!scrollPending) {
    scrollPending = true;
    window.requestAnimationFrame(updateHeader);
  }
}, { passive: true });
updateHeader();

// Visible by default: a missed observer or disabled JS never hides content.
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const reveals = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .06 });
  document.querySelectorAll(".dashboard-shell.reveal").forEach((element) => reveals.observe(element));
}

const notice = document.getElementById("site-notice");
const noticeText = document.getElementById("notice-text");
let noticeTimeout;
function showNotice(message) {
  window.clearTimeout(noticeTimeout);
  noticeText.textContent = message;
  notice.hidden = false;
  noticeTimeout = window.setTimeout(() => { notice.hidden = true; }, 10000);
}
document.getElementById("dismiss-notice").addEventListener("click", () => {
  notice.hidden = true;
  window.clearTimeout(noticeTimeout);
});

// A configured HTTPS URL updates every repository CTA.
let githubUrl;
try {
  const candidate = new URL(CONFIG.githubUrl);
  if (candidate.protocol === "https:") githubUrl = candidate.href;
} catch { /* The intentional placeholder is not a URL. */ }
document.querySelectorAll("[data-github]").forEach((link) => {
  if (githubUrl) {
    link.href = githubUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showNotice("The project’s GitHub URL has not been added yet. You can explore its current status below.");
    });
  }
});

// Only a valid public email creates a mailto link.
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)) {
  document.querySelectorAll("[data-email]").forEach((link) => {
    link.textContent = CONFIG.email;
    link.href = `mailto:${CONFIG.email}`;
  });
}

document.querySelectorAll("[data-disclosure]").forEach((button) => {
  const panel = document.getElementById(button.dataset.disclosure);
  button.addEventListener("click", () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
  });
});

// Every result is already authored in HTML. These controls only select examples.
const exampleQuestions = Object.freeze({
  expedition: "What happened to the expedition before they reached Raul?",
  meeting: "Where did Elena first meet Marcus?",
  bridge: "When was the old bridge destroyed?"
});
const queryInput = document.getElementById("story-query");
const searchStatus = document.getElementById("search-status");
function selectExample(key, updateQuestion = false) {
  let count = 0;
  document.querySelectorAll("[data-results]").forEach((group) => {
    const selected = group.dataset.results === key;
    group.hidden = !selected;
    if (selected) count = group.querySelectorAll(".search-result").length;
  });
  document.querySelectorAll("[data-query]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.query === key));
  });
  if (updateQuestion && exampleQuestions[key]) queryInput.value = exampleQuestions[key];
  searchStatus.textContent = key
    ? `${count} fictional passages · Different chapters, connected context`
    : "This concept only includes three prewritten examples. Choose a suggested question to explore one.";
}
document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => selectExample(button.dataset.query, true));
});
document.getElementById("story-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const question = queryInput.value.trim().toLowerCase();
  let example;
  if (question.includes("expedition") && question.includes("raul")) example = "expedition";
  else if (question.includes("elena") && question.includes("marcus")) example = "meeting";
  else if (question.includes("bridge")) example = "bridge";
  selectExample(example);
});
