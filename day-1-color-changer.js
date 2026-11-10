const changeColorButton = document.getElementById("change-color");

function randomColor() {
    const value = Math.floor(Math.random() * 16777216);
    return `#${value.toString(16).padStart(6, "0")}`;
}

changeColorButton.addEventListener("click", () => {
    const color = randomColor();

    document.querySelectorAll("h1, h2, h3").forEach(heading => {
        heading.style.color = color;
    });
});
