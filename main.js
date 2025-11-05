// main.js (module)
import { generatePalette } from "./palette.js";

function createSpark(x, y, color, delayMs) {
  const el = document.createElement("div");
  el.className = "spark";
  el.style.left = `${x * 100}%`;
  el.style.top = `${y * 100}%`;
  el.style.background = color;
  el.style.animationDelay = `${delayMs}ms`;
  el.style.width = `${8 + Math.random() * 24}px`;
  el.style.height = el.style.width;
  document.getElementById("surprise").appendChild(el);
  // remove after some time to avoid DOM buildup
  setTimeout(() => el.remove(), 7000);
}

export function startSurprise(seed = 42) {
  // create container once
  let container = document.getElementById("surprise");
  if (!container) {
    container = document.createElement("div");
    container.id = "surprise";
    document.body.appendChild(container);
  }
  const palette = generatePalette(seed, 8);
  // produce a burst of colorful floating dots across the screen
  for (let i = 0; i < 40; i += 1) {
    const x = Math.random();
    const y = Math.random();
    const color = palette[Math.floor(Math.random() * palette.length)];
    const delay = Math.floor(Math.random() * 1200);
    createSpark(x, y, color, delay);
  }
}

// run when page loads
window.addEventListener("load", () => {
  // small timeout so DOM paints
  setTimeout(() => startSurprise(Date.now() % 1000), 250);
});
