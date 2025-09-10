// Part 1: Button click triggers CSS animation
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("clicked");
  setTimeout(() => animateBtn.classList.remove("clicked"), 500);
});

// Part 2: Function to toggle box movement
const box = document.getElementById("box");
function toggleBoxMove() {
  box.classList.toggle("move");
}
// Trigger the function every 2 seconds automatically
setInterval(toggleBoxMove, 2000);

// Part 3: Modal control with reusable functions
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
