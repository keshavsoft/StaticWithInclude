let StartFunc = () => {
    let jVarLocalHtmlId = "InputBroadcastMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    if (jVarLocalMessage === null === false) {
        jVarLocalBroadcastAll({ inmessage: jVarLocalMessage });
    }
};

let jVarLocalBroadcastAll = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "BroadcastAll";
    LocalObjectToSend.Message = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };