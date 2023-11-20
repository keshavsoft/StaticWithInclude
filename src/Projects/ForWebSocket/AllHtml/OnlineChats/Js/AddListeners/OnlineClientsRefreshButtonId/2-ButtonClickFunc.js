let StartFunc = () => {
    jVarLocalRefreshOnlineClients();
};

let jVarLocalRefreshOnlineClients = () => {
    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "RefreshOnlineClients";
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };