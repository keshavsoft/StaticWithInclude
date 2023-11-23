let StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalReceiverMetaDataId = jVarLocalCurrentTarget.dataset.metadataid;
    let jVarLocalHtmlId = "InputMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    jVarLocalOneToOneMessage({ inmessage: jVarLocalMessage, inMetaDataId: jVarLocalReceiverMetaDataId });
    jVarLocalGetHtmlId.value = "";

};

let jVarLocalOneToOneMessage = ({ inmessage, inMetaDataId }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "OneToOneMessage";
    LocalObjectToSend.Message = inmessage;
    LocalObjectToSend.ReceiverId = inMetaDataId;
    showOneToOneMessageContent({ inMessage : inmessage })
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

function showOneToOneMessageContent({ inMessage }) {
    let temp = document.getElementById("OutGoingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;

    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

export { StartFunc };