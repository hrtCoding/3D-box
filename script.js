var boxesContainer = document.getElementById("boxes");
var btn = document.getElementById("btn");
btn.addEventListener(`click`, () => boxesContainer.classList.toggle("big"));

function createBoses() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      var box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoses();
