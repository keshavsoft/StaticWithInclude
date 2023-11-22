let StartFunc = ({ inTabName, inMetaDataId }) => {
    jVarLocalShowUserName({ inmessage: inTabName });
    jFLocalToInnerHtmlSendMessageButtonId({ inDataValue: inMetaDataId, inDataKey: "MetaDataId" })
};

let jVarLocalShowUserName = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "PrivateTab";
    LocalObjectToSend.TabName = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

let jFLocalToInnerHtmlSendMessageButtonId = ({ inDataValue, inDataKey }) => {
    let jVarLocalHtmlId = 'SendMessageButtonId';
    let jVarLocalSendMessageButtonId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSendMessageButtonId.setAttribute(`data-${inDataKey}`, inDataValue)
};
export { StartFunc };