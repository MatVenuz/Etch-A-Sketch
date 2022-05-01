const container = document.querySelector(".container");
const buttonSize = document.getElementById("grid-size");

function makeGrid(size) {
    container.style.setProperty("--size", size)
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseover', () => {
          cell.style.background = "black"
      })
    };
};

window.onload = makeGrid(10)

buttonSize.addEventListener("click", () =>  {
    let size = prompt("Insert a value between 1 or 64");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (size <= 64 && size >= 1) {
        makeGrid(size);
    }
    else {
        alert("Insert a valid value")
        makeGrid(10)
    }
});

