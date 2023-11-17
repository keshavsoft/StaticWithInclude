import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncReceiveMessages } from "./ForWebSocket/ReceiveMessages/EntryFile.js";

let jVarLocalWsUrlLocal = "ws://localhost:3000";
let jVarLocalWsUrlLocal1 = "ws://localhost:4119";
let jVarLocalWsUrl = "ws://tallyws12.keshavsoft.net/";
let jVarLocalWsUrl1 = "ws://washtex7.keshavsoft.net";

let jVarLocalWsUrlhttps = "wss://tallyws12.keshavsoft.net/";

let jVarCommonBmm = "wss://bmmwdo.org/";
let StartFunc = () => {

    webSocket = new WebSocket(jVarLocalWsUrlLocal1);

    webSocket.onopen = (event) => {
        webSocket.send("k1");

        let SendJsonData = {
            From: "Service",
            SysMac: "MAC",
            Type: "SysInfo"
        };

    };

    webSocket.onmessage = StartFuncReceiveMessages;

    StartFuncAddListeners();
    
};

function showContent({ inMessage }) {
    let temp = document.getElementById("IncomingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;
    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

StartFunc();