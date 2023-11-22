let StartFunc = ({ inJsonData }) => {
    
    if (jFLocalCheckWithSenderOnly({ inMessage: inJsonData.JsonData })) {
        if (inJsonData.MessageType === "OneToOneMessage") {
            let jVarLocalJsonData = inJsonData.JsonData;
            showOneToOneMessageContent({ inMessage: JSON.stringify(jVarLocalJsonData) });
        }
    }
};

let jFLocalCheckWithSenderOnly = ({ inMessage }) => {
    let jVarLocalSenderId = inMessage.FromId;
    let jVarLocalHtmlId = 'SendMessageButtonId';
    let jVarLocalSendMessageButtonId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalOpenedChatId = jVarLocalSendMessageButtonId.dataset.metadataid;
    return jVarLocalSenderId === jVarLocalOpenedChatId
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