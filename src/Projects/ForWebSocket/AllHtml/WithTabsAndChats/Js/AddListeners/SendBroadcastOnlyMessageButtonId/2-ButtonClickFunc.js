let StartFunc = () => {
    let jVarLocalHtmlId = "InputBroadcastOnlyMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    if (jVarLocalMessage === null === false) {
        jVarLocalBroadcastOnly({ inmessage: jVarLocalMessage });
    }
};

let jVarLocalBroadcastOnly = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "BroadcastOnly";
    LocalObjectToSend.Message = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };