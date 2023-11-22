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
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };