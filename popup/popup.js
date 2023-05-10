let userInput = document.getElementById('max-volume');
var ytmvf = {
    maxVolume: userInput.value
};

console.info(PLUGIN_NAME + 'Beginning YSMVF popup script...');

/* read stored value from storage and set the input to that value */
if (browser.storage.local.get(ytmvf, function (storage) {
    ytmvf.maxVolume = storage.maxVolume;
    userInput.value = ytmvf.maxVolume;
    console.info(PLUGIN_NAME + 'Slider value initialized to: ' + ytmvf.maxVolume + ' in popup.');
}));


// add input listener
userInput.addEventListener('change', () => {
    if (userInput.value >= 0 && userInput.value <= 100) {
        ytmvf.maxVolume = userInput.value;
        browser.storage.local.set(ytmvf);
        console.info(PLUGIN_NAME + 'Slider value changed to: ' + ytmvf.maxVolume + ' in popup.');
    } else {
        userInput.value = ytmvf.maxVolume;
        console.error(PLUGIN_NAME + 'User entered value not within boundry!');
    }
});