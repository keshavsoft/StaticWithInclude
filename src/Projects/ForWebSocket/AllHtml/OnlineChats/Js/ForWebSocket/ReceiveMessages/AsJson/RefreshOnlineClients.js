import { StartFunc as StartFuncClientLinkClass } from "../ClientLinkClass/1-ClickAssign.js";

let StartFunc = ({ inJsonData }) => {
    let jVarLocalJsonData = inJsonData.JsonData;

    jFLocalShowOnToast({ inJsonData: jVarLocalJsonData })

    let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");
    jVarLocalInboxId.innerHTML = "";
    jVarLocalJsonData.forEach(element => {
        showOnlineClientsContent({ inMessage: element });
    });
    StartFuncClientLinkClass();


};

let jFLocalShowOnToast = ({ inJsonData }) => {

    let jVarLocalJsonData = inJsonData;

    var toastLiveExample = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show();
    let jVarLocalMessage = toastLiveExample.querySelector(".toast-body");
    jVarLocalMessage.innerHTML = `${Object.keys(jVarLocalJsonData).length} Users Online`;
};

function showOnlineClientsContent({ inMessage }) {
    let temp = document.getElementById("OnlineClientsId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage.id;
    let jVarLocalClientNameId = clon.getElementById("ClientNameId");
    jVarLocalClientNameId.innerHTML = inMessage.Name;
    let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");
    jVarLocalInboxId.appendChild(clon);

};

export { StartFunc };