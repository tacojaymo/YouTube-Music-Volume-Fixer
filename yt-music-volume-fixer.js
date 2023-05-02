/* initialize maxVolume and storage */
let maxVolume = 100;

if (storageAvailable("localStorage")) {
    // get stored maxVolume from storage if it exists or default to 100
    if (!localStorage.getItem('maxVolumeLocal')) {
        maxVolume = 100;
        localStorage.setItem('maxVolumeLocal', 100);
        console.info('setting maxVolumeLocal to ' + JSON.stringify(maxVolume));
    } else {
        maxVolume = localStorage.getItem('maxVolumeLocal');
        console.info('getting maxVolumeLocal: ' + JSON.stringify(maxVolume));
    }
} else {
    // no storage available, set max value to 30 instead
    maxVolume = 30;
}

/* set the max on the volume slider based on the maxVolume value */
// get volume container element
let volume = document.getElementById('volume-slider');

volume.setAttribute('max', JSON.stringify(maxVolume));

/* create listener for when user changes max volume */
window.addEventListener('storage', function (e) {
    maxVolume = e.newValue;
    volume.setAttribute('max', JSON.stringify(maxVolume));
});

/* function that detects whether localStorage is both supported and available 
 * taken from: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API */

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
