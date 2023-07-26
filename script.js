document.addEventListener("DOMContentLoaded", createGrid);

let currentColor = "#000"; // Default color (black)

function createGrid() {
    const container = document.getElementById("container");

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("click", colorSquare);
        container.appendChild(square);
    }

    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", updateColor);
}

function colorSquare(event) {
    event.target.style.backgroundColor = currentColor;
}

function updateColor(event) {
    currentColor = event.target.value;
}
