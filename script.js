// constants
const container = document.querySelector(".container");
const buttonSize = document.getElementById("grid-size");
const rainbowButton = document.getElementById("rainbow");
const blackColorButton = document.getElementById("black");

// function that make the grid
function makeGrid(size) {
    container.style.setProperty("--size", size)
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener("mouseover", () => {
          cell.style.background = "black"
      })
    };
};

window.onload = makeGrid(10)

// eventListener for the button
buttonSize.addEventListener("click", () =>  {
    let size = prompt("Insert a value between 1 & 64");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (size <= 64 && size >= 1) {
        makeGrid(size);
    }
    else {
        alert("Insert a valid value (between 1 & 64)")
        makeGrid(10)
    }
});


// rainbow button
rainbowButton.addEventListener("click", () => {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(element => element.addEventListener("mouseover", () => {
        randomColor(element);
    }));
});

// rainbow generator
function randomColor(gItem) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    gItem.style.background = "#" + randomColor
}


// black color button 
blackColorButton.addEventListener("click", () => {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(element => element.addEventListener("mouseover", () => {
        blackColor(element);
    }));
});

// black color button
function blackColor(bItem) {
    bItem.style.background = "#000000"
}