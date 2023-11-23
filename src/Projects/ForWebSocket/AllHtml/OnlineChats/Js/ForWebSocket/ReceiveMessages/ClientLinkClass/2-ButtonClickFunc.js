let StartFunc = ({ inTabName, inMetaDataId }) => {
    jVarLocalShowUserName({ inmessage: inTabName });
    jFLocalToInnerHtmlSendMessageButtonId({ inDataValue: inMetaDataId, inDataKey: "MetaDataId" });
    jFLocalRemoveNotificationBadge({ inMetaDataId });
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
let jFLocalRemoveNotificationBadge = ({ inMetaDataId }) =>{
    let jVarLocalHtmlClass = "NotificationBadgeClass";
    let jVarLocalGetHtmlClass = document.getElementsByClassName(jVarLocalHtmlClass);
    
    for (let i = 0; i < jVarLocalGetHtmlClass.length; i++) {
        let jVarLocalId = jVarLocalGetHtmlClass[i].closest(".IdClass");
        let jVarLocalPTag = jVarLocalId.querySelector('p');
        let jVarLocalClientId = jVarLocalPTag.innerHTML;
    
        if (jVarLocalClientId === inMetaDataId) {
            let jVarLocalSpan = jVarLocalId.querySelector('span');
            jVarLocalSpan.style.display = "none";
    
        }
    }
}

export { StartFunc };