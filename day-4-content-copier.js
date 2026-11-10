const sourceContent = document.getElementById("source-content");
const targetContent = document.getElementById("target-content");
const copyButton = document.getElementById("copy-content");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", () => {
    targetContent.textContent = sourceContent.textContent;
    copyStatus.textContent = "Content copied successfully!";
});
