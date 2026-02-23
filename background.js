const PROJECT_ID = 13765;
const PING_URL = `https://flavortown.hackclub.com/projects/${PROJECT_ID}`;


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "PING_FLAVORTOWN") {
        fetch(PING_URL, {
            method: "GET",
            headers: {
                [`X-Flavortown-Ext-${PROJECT_ID}`]: "true"
            },
            credentials: "include"
        })
            .then(res => {
                console.log("Flavortown status:", res.status);
                sendResponse({ ok: true, status: res.status });
            })
            .catch(err => {
                console.error("Flavortown error:", err);
                sendResponse({ ok: false });
            });

        return true; // MUSI BYĆ
    }
});