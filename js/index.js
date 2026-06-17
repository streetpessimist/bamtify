const bamtifyButton = document.querySelector(".bamtify-button");

function createMagicDustLayer() {
  const layer = document.createElement("div");
  layer.className = "magic-dust-layer";
  document.body.append(layer);
  return layer;
}

function dropMagicDust(source) {
  const layer = createMagicDustLayer();
  const rect = source.getBoundingClientRect();
  const colors = ["#fff600", "#ff00c8", "#00ffff", "#00ff3c", "#ffffff"];

  for (let index = 0; index < 72; index += 1) {
    const dust = document.createElement("span");
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height * 0.45;
    const size = 6 + Math.random() * 15;
    const drift = -110 + Math.random() * 220;
    const fall = 90 + Math.random() * 180;
    const duration = 520 + Math.random() * 420;
    const rotate = -260 + Math.random() * 520;

    dust.className = "magic-dust";
    dust.style.setProperty("--dust-x", `${x}px`);
    dust.style.setProperty("--dust-y", `${y}px`);
    dust.style.setProperty("--dust-size", `${size}px`);
    dust.style.setProperty("--dust-drift", `${drift}px`);
    dust.style.setProperty("--dust-fall", `${fall}px`);
    dust.style.setProperty("--dust-duration", `${duration}ms`);
    dust.style.setProperty("--dust-rotate", `${rotate}deg`);
    dust.style.setProperty(
      "--dust-color",
      colors[Math.floor(Math.random() * colors.length)]
    );
    layer.append(dust);
  }

  window.setTimeout(() => layer.remove(), 1100);
}

if (bamtifyButton) {
  bamtifyButton.addEventListener("click", () => {
    dropMagicDust(bamtifyButton);
  });
}
