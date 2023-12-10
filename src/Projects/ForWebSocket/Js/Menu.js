import { StartFunc as StartFuncReceiveMessages } from "./ForWebSocket/ReceiveMessages/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
};

if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
};

let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {
        // let jVarLocalOnlineStatusColId = document.getElementById("OnlineStatusColId");
        // jVarLocalOnlineStatusColId.style.display = "";
        // let jVarLocalOfflineStatusColId = document.getElementById("OfflineStatusColId");
        // jVarLocalOfflineStatusColId.style.display = "none";

        // let SendJsonData = {
        //     From: "Service",
        //     SysMac: "MAC",
        //     Type: "SysInfo"
        // };
        StartFuncAddListeners();
    };

    webSocket.onmessage = StartFuncReceiveMessages;

    // StartFuncAddListeners();

    webSocket.onclose = function (e) {
        let jVarLocalOnlineStatusColId = document.getElementById("OnlineStatusColId");
        jVarLocalOnlineStatusColId.style.display = "none";
        let jVarLocalOfflineStatusColId = document.getElementById("OfflineStatusColId");
        jVarLocalOfflineStatusColId.style.display = "";
    };
};

StartFunc();