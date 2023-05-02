let maxVol = document.getElementById("volume");

// add input listener
maxVol.addEventListener("input", function () {
    let volume = maxVol.value;

    // send a message to the Firefox background script with the new volume value
    self.port.emit("updateVolume", volume);

    console.log("Slider value changed to " + volume);
});