import { StartFunc as StartFuncClientLinkClass } from "./ClientLinkClass/1-ClickAssign.js";
import { StartFunc as StartFuncSendPrivateTabMessageButtonClass } from "../../AddListeners/SendMessagePrivateTabButtonClass/1-ClickAssign.js";

let StartFunc = ({ inJsonData }) => {

    if (inJsonData.MessageType === "WSServer") {
        let jVarLocalInputUserNameId = document.getElementById("InputUserNameId");
        jVarLocalInputUserNameId.innerHTML = inJsonData.JsonData.UserName;
    }
    
    if (inJsonData.MessageType === "OnlineClients") {
        let jVarLocalJsonData = inJsonData.JsonData;
        let jVarLocalInboxId = document.getElementById("inbox_chat");
        jVarLocalInboxId.innerHTML = "";
        jVarLocalJsonData.forEach(element => {
            showContent({ inMessage: element });
        });
        StartFuncClientLinkClass();
    }

    if (inJsonData.MessageType === "RefreshOnlineClients") {
        let jVarLocalJsonData = inJsonData.JsonData;
        let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");
        jVarLocalInboxId.innerHTML = "";
        jVarLocalJsonData.forEach(element => {
            showOnlineClientsContent({ inMessage: element });
        });
    }

    if (inJsonData.MessageType === "BroadcastOnly") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData)});
    }

    if (inJsonData.MessageType === "BroadcastAll") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData)});
    }

    if (inJsonData.MessageType === "PrivateMessage") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData)});
    }

    if (inJsonData.MessageType === "PrivateTab") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showNewTabContent({ inMessage: jVarLocalJsonData.TabName });
        StartFuncSendPrivateTabMessageButtonClass({ inTabName: jVarLocalJsonData.TabName });
    }

    if (inJsonData.MessageType === "PrivateTabMessage") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData)});
    }

};

function showContent({ inMessage }) {
    let temp = document.getElementById("OnlineClientsId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage.id;
    let jVarLocalClientNameId = clon.getElementById("ClientNameId");
    jVarLocalClientNameId.innerHTML = inMessage.Name;
    let jVarLocalInboxId = document.getElementById("inbox_chat");
    jVarLocalInboxId.appendChild(clon);

};

function showOnlineClientsContent({ inMessage }) {
    let temp = document.getElementById("OnlineClientsId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage.id;
    let jVarLocalClientNameId = clon.getElementById("ClientNameId");
    jVarLocalClientNameId.innerHTML = inMessage.Name;
    let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");
    jVarLocalInboxId.appendChild(clon);

};

function showMessageContent({ inMessage }) {
    let temp = document.getElementById("IncomingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;
    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

function showNewTabContent({ inMessage }) {
    console.log("j", inMessage);
    let temptab = document.getElementById("PrivateTabId");
    let clontab = temptab.content.cloneNode(true);
    let TabName = clontab.getElementById("private-tab");
    TabName.innerHTML = inMessage;
    let jVarLocalmyTabId = document.getElementById("myTab");
    jVarLocalmyTabId.appendChild(clontab);

    let temp = document.getElementById("PrivateChatId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalTabPaneId = document.getElementById("myTabContent");
    jVarLocalTabPaneId.appendChild(clon);

};

export { StartFunc };