// Small interactions for the portfolio starter.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  const characterData = {
    nari: {
      name: "Nari", label: "CHARACTER PROFILE · 01", role: "Add a short character descriptor",
      personality: "Describe Nari's defining traits, temperament, strengths, and flaws. How does she respond to conflict? How does she treat the people around her?",
      background: "Add Nari's history, motivations, relationships, and role in the story."
    },
    olei: {
      name: "Olei", label: "CHARACTER PROFILE · 02", role: "Add a short character descriptor",
      personality: "Describe Olei's defining traits, temperament, strengths, and flaws. What does she believe in, and what challenges those beliefs?",
      background: "Add Olei's history, motivations, relationships, and role in the story."
    },
    ilusi: {
      name: "Ilusi", label: "CHARACTER PROFILE · 03", role: "Add a short character descriptor",
      personality: "Describe Ilusi's defining traits, temperament, strengths, and flaws. What makes her distinct from the rest of the cast?",
      background: "Add Ilusi's history, motivations, relationships, and role in the story."
    },
    ranger: {
      name: "Ranger", label: "CHARACTER PROFILE · 04", role: "Add a short character descriptor",
      personality: "Describe Ranger's defining traits, temperament, strengths, and flaws. How does he approach the world and the people in it?",
      background: "Add Ranger's history, motivations, relationships, and role in the story."
    },
    elk: {
      name: "Elk", label: "CHARACTER PROFILE · 05", role: "Add a short character descriptor",
      personality: "Describe Elk's defining traits, temperament, strengths, and flaws. What motivates him, and what does he value?",
      background: "Add Elk's history, motivations, relationships, and role in the story."
    }
  };

  const tabs = document.querySelectorAll(".character-tab");
  tabs.forEach(tab => tab.addEventListener("click", () => {
    const data = characterData[tab.dataset.character];
    if (!data) return;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.getElementById("character-name").textContent = data.name;
    document.getElementById("character-label").textContent = data.label;
    document.getElementById("character-role").textContent = data.role;
    document.getElementById("character-personality").textContent = data.personality;
    document.getElementById("character-background").textContent = data.background;
    document.getElementById("character-portrait").innerHTML = `<span>${data.name.toUpperCase()} · ADD CHARACTER ARTWORK</span>`;
  }));
});
