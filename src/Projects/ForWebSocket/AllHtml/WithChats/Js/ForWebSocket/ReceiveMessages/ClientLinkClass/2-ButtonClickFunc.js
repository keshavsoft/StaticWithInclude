let StartFunc = ({ inTabName }) => {
    jVarLocalOpenPrivateTab({ inmessage : inTabName });

};

let jVarLocalOpenPrivateTab = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "PrivateTab";
    LocalObjectToSend.TabName = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };