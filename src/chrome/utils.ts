export const getCurrentTabUrl = (callback: (url: string | undefined) => void): void => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        callback(tabs[0].url);
    });
}

export const getCurrentTabUId = (callback: (url: number | undefined) => void): void => {
    const queryInfo = {active: true, lastFocusedWindow: true};
    // chrome.tabs.executeScript( {
    //     code: "window.getSelection().toString();"
    //   }, function(selection) {
    //     console.log("🚀 ~ file: utils.ts:14 ~ getCurrentTabUId ~ selection:", selection)
    //     callback( selection[0]);
    //   });
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        callback(tabs[0].id);
    });
}