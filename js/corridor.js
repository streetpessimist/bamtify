const scene = document.querySelector(".corridor-scene");
const hotspots = [...document.querySelectorAll(".hotspot")];
const pieces = new Map(
  [...document.querySelectorAll("[data-piece]")].map((piece) => [
    piece.dataset.piece,
    piece,
  ])
);

const completed = new Set();

function flashScene() {
  scene.classList.remove("is-flashing");
  void scene.offsetWidth;
  scene.classList.add("is-flashing");
}

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const target = hotspot.dataset.target;
    const piece = pieces.get(target);

    if (!piece || completed.has(target)) {
      return;
    }

    completed.add(target);
    hotspot.classList.add("is-done");
    piece.classList.remove("is-visible");
    void piece.offsetWidth;
    piece.classList.add("is-visible");
    flashScene();
  });
});
