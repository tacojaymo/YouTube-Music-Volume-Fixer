/* initialize variables and storage */
// get stored maxVolume from storage if it exists or default to 100
browser.storage.local.get("maxVolumeStorage").then((result) => {
    if (result.maxVolumeStorage) {
        let maxVolume = result.maxVolumeStorage;
        maxVolume = 50;
        console.log(maxVolume);
    } else {
        let maxVolume = 100;
        browser.storage.local.set({ maxVolumeStorage: maxVolume });
        console.log(maxVolume);
    }
});

/* set the max on the volume slider based on the maxVolume value */
// get volume container element
let volume = document.getElementById('volume-slider');

volume.setAttribute('max', maxVolume);

/* create listener for when user changes max volume */
