//import storageAvailable from '../yt-music-volume-fixer'
let userInput = document.getElementById("max-volume");
let volume = userInput.value;

// if (storageAvailable("localStorage")) {
//     // get stored maxVolume from storage if it exists or default to 100
//     if (!localStorage.getItem('maxVolumeLocal')) {
//         volume = 100;
//         localStorage.setItem('maxVolumeLocal', 100);
//         console.warn('setting maxVolumeLocal to ' + JSON.stringify(volume));
//     } else {
//         volume = localStorage.getItem('maxVolumeLocal');
//         console.info('getting maxVolumeLocal: ' + JSON.stringify(volume));
//     }
// } else {
//     // no storage available, set max value to 30 instead
//     volume = 30;
//     console.error('not enough local storage!');
// }

console.info("Slider value set: " + JSON.stringify(volume));
// add input listener
userInput.addEventListener("input", () => {
    volume = userInput.value;

    if (volume <= 50) {
        document.getElementById('has-storage').hidden = true;
        document.getElementById('no-storage').hidden = false;
    }

    console.info("Slider value changed to " + JSON.stringify(volume));
});