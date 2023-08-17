document.addEventListener("DOMContentLoaded", createDefaultGrid);

let currentColor = "#000";

function createDefaultGrid() {
    const container = document.getElementById("container");

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", colorSquare);
    });

    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", updateColor);
}

const newGridBtn = document.getElementById("new-grid-btn");
newGridBtn.addEventListener("click", function () {
    let userInput = prompt('Enter the number of squares per side for your new grid (between 1 and 100):');
    userInput = parseInt(userInput);

    if (userInput >= 1 && userInput <= 100) {
        const container = document.getElementById("container");
        container.innerHTML = '';

        createNewGrid(userInput);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

function createNewGrid(userInput) {
    const container = document.getElementById("container");

    for (let i = 0; i < userInput * userInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", colorSquare);
    });

    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", updateColor);
}

function colorSquare(event) {
    event.target.style.backgroundColor = currentColor;
}

function updateColor(event) {
    currentColor = event.target.value;
}
