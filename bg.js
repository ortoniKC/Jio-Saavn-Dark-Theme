chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "loading") {
        if (tab.url === "https://www.jiosaavn.com/") {
            chrome.tabs.insertCSS(tabId, {
                file: "dark.css"
            }, () => {
                console.log("Inserted");
            })
        }
    }
})