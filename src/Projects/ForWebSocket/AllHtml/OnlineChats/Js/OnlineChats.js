import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncReceiveMessages } from "./ForWebSocket/ReceiveMessages/EntryFile.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

let jVarLocalWsUrlLocal = "ws://localhost:3000";
let jVarLocalWsUrlLocal1 = "ws://localhost:4119";
let jVarLocalWsUrl = "ws://tallyws12.keshavsoft.net/";
let jVarLocalWsUrl1 = "ws://washtex7.keshavsoft.net";

let jVarLocalWsUrlhttps = "wss://tallyws12.keshavsoft.net/";

let jVarCommonBmm = "wss://bmmwdo.org/";

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}


let StartFunc = () => {

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: jFLocalEstablishWebSocket });
    if (jVarLocalFromAdmin) {
        StartFuncAddListeners();

        jFLocalEstablishWebSocket();
    };

};

let jFLocalEstablishWebSocket = () => {

    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {
        webSocket.send("k1");

        let jVarLocalOnlineStatusColId = document.getElementById("OnlineStatusColId");
        jVarLocalOnlineStatusColId.style.display = "";
        let jVarLocalOfflineStatusColId = document.getElementById("OfflineStatusColId");
        jVarLocalOfflineStatusColId.style.display = "none";

        let SendJsonData = {
            From: "Service",
            SysMac: "MAC",
            Type: "SysInfo"
        };

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