let userInput = document.getElementById("max-volume");
let volume = userInput.value;

// add input listener
userInput.addEventListener("input", function () {
    volume = userInput.value;

    console.log("Slider value changed to " + volume);
});