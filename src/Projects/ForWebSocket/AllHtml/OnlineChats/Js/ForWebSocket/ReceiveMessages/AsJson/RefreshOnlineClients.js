import { StartFunc as StartFuncClientLinkClass } from "../ClientLinkClass/1-ClickAssign.js";

let StartFunc = ({ inJsonDataOnly, inShowNotification }) => {
    let jVarLocalJsonData = inJsonDataOnly;
    let jVarLocaShowNotification = inShowNotification;

    jFLocalShowOnToast({ inJsonData: jVarLocalJsonData });
    if (jVarLocaShowNotification) {
        jFLocalWindowsNotification({ inJsonData: jVarLocalJsonData });
    }

    let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");
    jVarLocalInboxId.innerHTML = "";

    jVarLocalJsonData.forEach(element => {
        console.log("ddddddddddd : ", element);
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
    let jVarLocalClientNameId = clon.querySelector(".ClientLinkClass");
    jVarLocalClientNameId.innerHTML = inMessage.Name;
    let jVarLocalInboxId = document.getElementById("OnlineInboxChatId");

    jVarLocalInboxId.appendChild(clon);
};

function jFLocalWindowsNotification({ inJsonData }) {

    let jVarLocalJsonData = inJsonData;
    let jVarLocalJsonDataLength = Object.keys(jVarLocalJsonData).length

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        const notification = new Notification(`${jVarLocalJsonDataLength} Users Online`);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                const notification = new Notification(`${jVarLocalJsonDataLength} Users Online`);
            }
        });
    }

}


export { StartFunc };