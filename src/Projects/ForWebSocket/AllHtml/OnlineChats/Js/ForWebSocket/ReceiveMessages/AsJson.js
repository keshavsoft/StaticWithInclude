import { StartFunc as StartFuncClientLinkClass } from "./ClientLinkClass/1-ClickAssign.js";
// import { StartFunc as StartFuncSendPrivateTabMessageButtonClass } from "../../AddListeners/SendMessagePrivateTabButtonClass/1-ClickAssign.js";
// import { StartFunc as StartFuncSendMessageButtonId } from "../../AddListeners/SendMessageButtonId/1-ClickAssign.js";

import { StartFunc as StartFuncRefreshOnlineClients } from "./AsJson/RefreshOnlineClients.js";
import { StartFunc as StartFuncChatSelected } from "./AsJson/ChatSelected.js";

let StartFunc = ({ inJsonData, inShowNotification }) => {

    let jVarLocalFromCheck = jFLocalCheckIsChatOpen({ inJsonData });
  
    if (jVarLocalFromCheck) {
        StartFuncChatSelected({ inJsonData })
    } else {
        jFLocalCommonChat({ inJsonData, inShowNotification });
    };
};

let jFLocalCheckIsChatOpen = ({ inJsonData }) => {
    let jVarLocalSendMessageButtonId = document.getElementById("SendMessageButtonId");
    if ("metadataid" in jVarLocalSendMessageButtonId.dataset) {
        if (jVarLocalSendMessageButtonId.dataset.metadataid === inJsonData.JsonData.FromId) {
            return true;
        }
    }
    return false;
};

let jFLocalCommonChat = ({ inJsonData, inShowNotification }) => {
    if (inJsonData.MessageType === "WSServer") {
        let jVarLocalInputUserNameId = document.getElementById("InputUserNameId");
        jVarLocalInputUserNameId.innerHTML = inJsonData.JsonData.UserName;
    }

    if (inJsonData.MessageType === "OnlineClients") {
        let jVarLocalHtmlId = "OnlineClientsRefreshButtonId";
        let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
        jVarLocalGetHtmlId.click();

        let jVarLocalJsonData = inJsonData.JsonData;
        let jVarLocalInboxId = document.getElementById("inbox_chat");
        jVarLocalInboxId.innerHTML = "";
        jVarLocalJsonData.forEach(element => {
            showContent({ inMessage: element });
        });


    }

    if (inJsonData.MessageType === "RefreshOnlineClients") {
        StartFuncRefreshOnlineClients({ inJsonDataOnly: inJsonData.JsonData, inShowNotification })
    };

    if (inJsonData.MessageType === "BroadcastOnly") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
    }

    if (inJsonData.MessageType === "BroadcastAll") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
    }

    if (inJsonData.MessageType === "OneToOneMessage") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showOneToOneMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData), inFromId: jVarLocalJsonData.FromId });
    }

    if (inJsonData.MessageType === "PrivateMessage") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
    }

    if (inJsonData.MessageType === "PrivateTabMessage") {
        let jVarLocalJsonData = inJsonData.JsonData;
        showMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
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

function showMessageContent({ inMessage }) {
    let temp = document.getElementById("IncomingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;
    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

function showOneToOneMessageContent({ inMessage, inFromId }) {
    let jVarLocalFromId = inFromId;
    let jVarLocalHtmlClass = "NotificationBadgeClass";
    let jVarLocalGetHtmlClass = document.getElementsByClassName(jVarLocalHtmlClass);

    for (let i = 0; i < jVarLocalGetHtmlClass.length; i++) {
        let jVarLocalId = jVarLocalGetHtmlClass[i].closest(".IdClass");
        let jVarLocalPTag = jVarLocalId.querySelector('p');
        let jVarLocalClientId = jVarLocalPTag.innerHTML;

        if (jVarLocalClientId === jVarLocalFromId) {
            let jVarLocalSpan = jVarLocalId.querySelector('span');
            let jVarLocalBadgeNumber = Number(jVarLocalSpan.innerHTML)+1;
            jVarLocalSpan.innerHTML = jVarLocalBadgeNumber;
            jVarLocalSpan.style.display = "";
            
        }
    }
};


export { StartFunc };