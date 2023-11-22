let StartFunc = ({ inJsonData }) => {
    let jVarLocalJsonData = inJsonData.JsonData;
    let jVarLocalFromCheck = jFLocalCheckWithSenderOnly({ inMessage: jVarLocalJsonData });

    if (jVarLocalFromCheck) {
        if (inJsonData.MessageType === "OneToOneMessage") {
            showOneToOneMessageContent({ inMessage: jVarLocalJsonData });
        };
    };
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
    jVarLocalP.innerHTML = inMessage.FromMessage;

    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

export { StartFunc };