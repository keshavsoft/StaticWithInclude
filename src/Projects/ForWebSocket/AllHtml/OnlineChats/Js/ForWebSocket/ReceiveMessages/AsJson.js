import { StartFunc as StartFuncClientLinkClass } from "./ClientLinkClass/1-ClickAssign.js";
// import { StartFunc as StartFuncSendPrivateTabMessageButtonClass } from "../../AddListeners/SendMessagePrivateTabButtonClass/1-ClickAssign.js";
// import { StartFunc as StartFuncSendMessageButtonId } from "../../AddListeners/SendMessageButtonId/1-ClickAssign.js";

import { StartFunc as StartFuncRefreshOnlineClients } from "./AsJson/RefreshOnlineClients.js";
import { StartFunc as StartFuncChatSelected } from "./AsJson/ChatSelected.js";

let StartFunc = ({ inJsonData, inShowNotification }) => {

    let jVarLocalFromCheck = jFLocalCheckIsChatOpen();
  
    if (jVarLocalFromCheck) {
        StartFuncChatSelected({ inJsonData })
    } else {
        jFLocalCommonChat({ inJsonData, inShowNotification });
    };
};

let jFLocalCheckIsChatOpen = () => {
    let jVarLocalSendMessageButtonId = document.getElementById("SendMessageButtonId");
    return ("metadataid" in jVarLocalSendMessageButtonId.dataset);
};

let jFLocalCommonChat = ({ inJsonData, inShowNotification }) => {
    console.log("aaaaaaaaaaa : ", inJsonData);
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
        showOneToOneMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
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

function showOneToOneMessageContent({ inMessage }) {
    let temp = document.getElementById("OutGoingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;
    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};


export { StartFunc };