let StartFunc = ({ inTabName, inMetaDataId }) => {
    jVarLocalShowUserName({ inmessage: inTabName });
    jFLocalToInnerHtmlSendMessageButtonId({ inDataValue: inMetaDataId, inDataKey: "MetaDataId" })
};

let jVarLocalShowUserName = ({ inmessage }) => {

    let jVarLocalHtmlId = 'MessageBoxUserId';
    let jVarLocalMessageBoxUserId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMessageBoxUserId.innerHTML = inmessage;
    let jVarLocalTabPaneId = document.getElementById("MessageHistoryId");
    jVarLocalTabPaneId.innerHTML = "";
}

let jFLocalToInnerHtmlSendMessageButtonId = ({ inDataValue, inDataKey }) => {
    let jVarLocalHtmlId = 'SendMessageButtonId';
    let jVarLocalSendMessageButtonId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSendMessageButtonId.setAttribute(`data-${inDataKey}`, inDataValue)
};
export { StartFunc };