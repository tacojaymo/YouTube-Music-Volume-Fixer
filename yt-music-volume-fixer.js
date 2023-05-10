var slider = {
    maxVolume: 100
};

// get volume slider container element
let volumeSlider = document.getElementById('volume-slider');
console.info(PLUGIN_NAME + 'Starting injector plugin and setting maxVolume to: ' + slider.maxVolume);

/* set the max on the volume slider based on the stored maxVolume value */
browser.storage.local.get(slider, function (storage) {
    slider.maxVolume = Number(storage.maxVolume);
    console.info(PLUGIN_NAME + 'maxVolume value set to: ' + slider.maxVolume);
    volumeSlider.setAttribute('max', Number(slider.maxVolume));
});

/* callback for when settings are updated */
function settingsUpdateCallback(storage) {
    slider.maxVolume = storage.maxVolume.newValue;
    volumeSlider.setAttribute('max', Number(slider.maxVolume));
    console.info(PLUGIN_NAME + 'Storage value changed in YTM! Set to: ' + slider.maxVolume);
}

/* create listener for when user changes max volume */
browser.storage.onChanged.addListener(settingsUpdateCallback);
