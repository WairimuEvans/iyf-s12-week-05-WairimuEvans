const addParagraphButton = document.getElementById("add-paragraph");
const paragraphContainer = document.getElementById("paragraph-container");

let paragraphCount = 0;

addParagraphButton.addEventListener("click", () => {
    paragraphCount++;

    const newParagraph = document.createElement("p");

    newParagraph.textContent = `This is dynamically created paragraph ${paragraphCount}.`;

    paragraphContainer.appendChild(newParagraph);
});
