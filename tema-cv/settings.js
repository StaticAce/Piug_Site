// settings.js
function toggleDarkMode() {
    var body = document.body;
    var textElements = document.getElementsByClassName("text-secondary");
    var colorButton = document.getElementById("colorToggleButton");
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        body.style.backgroundColor = "white";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black";
        }
        colorButton.style.backgroundColor = "white";
        colorButton.style.color = "black";
        localStorage.setItem("darkMode", "false");
    } else {
        body.style.backgroundColor = "black";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "white";
        }
        colorButton.style.backgroundColor = "black";
        colorButton.style.color = "white";
        localStorage.setItem("darkMode", "true");
    }
}

// Check the saved dark mode state when the page loads
document.addEventListener("DOMContentLoaded", function () {
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        toggleDarkMode();
    }
});
