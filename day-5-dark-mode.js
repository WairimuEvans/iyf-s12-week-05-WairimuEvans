const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkModeEnabled = document.body.classList.contains("dark-mode");
    themeToggleButton.textContent = darkModeEnabled
        ? "Enable Light Mode"
        : "Enable Dark Mode";

    themeToggleButton.setAttribute("aria-pressed", String(darkModeEnabled));
});
