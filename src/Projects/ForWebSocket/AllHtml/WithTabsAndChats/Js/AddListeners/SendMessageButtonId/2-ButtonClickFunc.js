let StartFunc = () => {
    let jVarLocalHtmlId = "InputMessageBoxId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalMessage = jVarLocalGetHtmlId.value.trim();
    webSocket.send(jVarLocalMessage);
};

export { StartFunc };