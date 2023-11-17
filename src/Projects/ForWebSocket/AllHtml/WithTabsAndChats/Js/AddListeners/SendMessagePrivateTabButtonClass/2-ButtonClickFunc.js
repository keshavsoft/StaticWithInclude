let StartFunc = ({ inTabName, index }) => {

    let jVarLocalInputPrivateTabMessageBoxClass = document.getElementsByClassName("InputPrivateTabMessageBoxClass");
    console.log("val",jVarLocalInputPrivateTabMessageBoxClass, index);
    if (jVarLocalInputPrivateTabMessageBoxClass[index].value === undefined === false) {
        let jVarLocalPrivateTabMessage = jVarLocalInputPrivateTabMessageBoxClass[index].value;
        jVarLocalPrivateMessage({ inTabName, inmessage: jVarLocalPrivateTabMessage })
    }

};

let jVarLocalPrivateMessage = ({ inTabName, inmessage }) => {
    console.log("hello-------", inTabName, inmessage);
    let jVarLocalMessage = inmessage;
    let jVarLocalReceiver = inTabName;
    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "PrivateTabMessage";
    LocalObjectToSend.Receiver = jVarLocalReceiver;
    LocalObjectToSend.Message = jVarLocalMessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };