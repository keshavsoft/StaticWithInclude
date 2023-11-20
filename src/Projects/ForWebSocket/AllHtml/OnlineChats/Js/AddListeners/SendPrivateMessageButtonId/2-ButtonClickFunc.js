let StartFunc = () => {
    let jVarLocalHtmlId = "InputPrivateMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    if (jVarLocalMessage === null === false) {
        jVarLocalPrivateMessage({ inmessage: jVarLocalMessage });
    }
};

let jVarLocalPrivateMessage = ({ inmessage }) => {
    let jVarLocalMessage = inmessage;
    let jVarLocalReceiver = jVarLocalMessage.split(':')[0].trim();
    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "PrivateMessage";
    LocalObjectToSend.Receiver = jVarLocalReceiver;
    LocalObjectToSend.Message = jVarLocalMessage.split(':')[1].trim();
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };