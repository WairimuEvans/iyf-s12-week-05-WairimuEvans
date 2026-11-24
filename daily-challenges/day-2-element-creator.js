const addParagraphButton = document.getElementById("add-paragraph");
const paragraphContainer = document.getElementById("paragraph-container");

let paragraphCount = 0;

addParagraphButton.addEventListener("click", () => {
    paragraphCount++;

    const newParagraph = document.createElement("p");
    const paragraphText = document.createElement("span");
    const deleteButton = document.createElement("button");

    paragraphText.textContent = `This is dynamically created paragraph ${paragraphCount}.`;

    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete paragraph ${paragraphCount}`);

    deleteButton.addEventListener("click", () => {
        newParagraph.remove();
    });

    newParagraph.append(paragraphText, " ", deleteButton);
    paragraphContainer.appendChild(newParagraph);
});
