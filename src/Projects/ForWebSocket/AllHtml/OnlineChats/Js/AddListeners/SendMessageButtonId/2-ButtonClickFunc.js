let StartFunc = () => {
    let jVarLocalHtmlId = "InputMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    jVarLocalOneToOneMessage({ inmessage: jVarLocalMessage});
};

let jVarLocalOneToOneMessage = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "OneToOneMessage";
    LocalObjectToSend.Message = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };