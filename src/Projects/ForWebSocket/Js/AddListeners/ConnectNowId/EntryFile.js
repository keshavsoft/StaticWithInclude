import { StartFunc as StartFuncReceiveMessages } from "../../ForWebSocket/ReceiveMessages/EntryFile.js";

let StartFunc = () => {
    let jVarLocalSendNowId = document.getElementById('ConnectNowId');

    jVarLocalSendNowId.addEventListener("click", (event) => {
        // webSocket.send("This if for Testing");
        jFLocalEstablishWebSocket();
    });
};

let jFLocalEstablishWebSocket = () => {
    let jVarLocalHostName = window.location.host;
    let jVarLocalUrlForWS;

    if (location.protocol === "https:") {
        jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
    };

    if (location.protocol === "http:") {
        jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
    };

    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {

    };

    webSocket.onmessage = StartFuncReceiveMessages;

    webSocket.onclose = function (e) {
        // let jVarLocalOnlineStatusColId = document.getElementById("OnlineStatusColId");
        // jVarLocalOnlineStatusColId.style.display = "none";
        // let jVarLocalOfflineStatusColId = document.getElementById("OfflineStatusColId");
        // jVarLocalOfflineStatusColId.style.display = "";
    };
};

export { StartFunc };