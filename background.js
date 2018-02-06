chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.local.get('raw_toggle', function (data) {
        alert("we are " + data.raw_toggle);
        chrome.storage.local.set({ raw_toggle: !data.raw_toggle }, function () {
            if (chrome.runtime.lastError) throw Error(chrome.runtime.lastError);
        });
    });
});

