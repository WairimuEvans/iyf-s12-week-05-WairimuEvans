const removeImagesButton = document.getElementById("remove-images");
const toggleImagesButton = document.getElementById("toggle-images");

removeImagesButton.addEventListener("click", () => {
    document.querySelectorAll("main img").forEach(image => image.remove());
});

toggleImagesButton.addEventListener("click", () => {
    const images = [...document.querySelectorAll("main img")];
    const shouldHide = images.some(image => !image.hidden);

    images.forEach(image => {
        image.hidden = shouldHide;
    });

    toggleImagesButton.textContent = shouldHide ? "Show Images" : "Hide Images";
});
