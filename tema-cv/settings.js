function toggleDarkMode() {
    var body = document.body;
    var textElements = document.getElementsByClassName("text-secondary");
    var colorButton = document.getElementById("colorToggleButton");
    var scrollButton = document.getElementById("scroll-down-button"); 
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        body.style.backgroundColor = "white";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black";
        }
        colorButton.style.backgroundColor = "white";
        colorButton.style.color = "black";
        scrollButton.style.backgroundColor = "white"; 
        scrollButton.style.color = "black";
        localStorage.setItem("darkMode", "false");
    } else {
        body.style.backgroundColor = "black";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "white";
        }
        colorButton.style.backgroundColor = "black";
        colorButton.style.color = "white";
        scrollButton.style.backgroundColor = "black"; 
        scrollButton.style.color = "white";
        localStorage.setItem("darkMode", "true");
    }
}
