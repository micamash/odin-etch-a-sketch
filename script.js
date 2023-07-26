document.addEventListener("DOMContentLoaded", createGrid);

let currentColor = "#000"; // Default color (black)

function createGrid() {
    const container = document.getElementById("container");

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("click", colorSquare); // Add click event listener
        container.appendChild(square);
    }

    // Add event listener to the color picker
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", updateColor);
}

function colorSquare(event) {
    // Set the background color permanently on click
    event.target.style.backgroundColor = currentColor;
}

function updateColor(event) {
    currentColor = event.target.value;
}
