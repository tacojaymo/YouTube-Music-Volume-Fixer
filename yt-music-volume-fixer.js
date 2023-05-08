var slider = {
    maxVolume: 100
};
console.info(PL_NAME + 'Starting injector plugin and setting maxVolume to: ' + slider.maxVolume);

/* initialize maxVolume from storage */
browser.storage.local.get(slider, function (storage) {
    slider.maxVolume = Number(storage.maxVolume);
});

/* callback for when settings are updated */
function settingsUpdateCallback(storage) {
    slider.maxVolume = storage.maxVolume.newValue;
    volumeSlider.setAttribute('max', Number(slider.maxVolume));
    console.info(PL_NAME + 'Storage value changed in YTM! Set to: ' + slider.maxVolume);
}

/* set the max on the volume slider based on the maxVolume value */
// get volume slider container element
let volumeSlider = document.getElementById('volume-slider');

volumeSlider.setAttribute('max', Number(slider.maxVolume));
console.info(PL_NAME + 'Setting "max" slider value to: ' + slider.maxVolume);

/* create listener for when user changes max volume */
browser.storage.onChanged.addListener(settingsUpdateCallback);
