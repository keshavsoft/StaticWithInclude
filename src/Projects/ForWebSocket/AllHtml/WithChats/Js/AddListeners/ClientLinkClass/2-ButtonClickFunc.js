let StartFunc = ({ inTabName }) => {
    showNewTabContent({ inTabName });

};

function showNewTabContent({ inTabName }) {
    console.log("j", inTabName);
    let temptab = document.getElementById("PrivateTabId");
    let clontab = temptab.content.cloneNode(true);
    let TabName = clontab.getElementById("private-tab");
    TabName.innerHTML = inTabName;
    let jVarLocalmyTabId = document.getElementById("myTab");
    jVarLocalmyTabId.appendChild(clontab);

    let temp = document.getElementById("PrivateChatId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalTabPaneId = document.getElementById("myTabContent");
    jVarLocalTabPaneId.appendChild(clon);

};


export { StartFunc };