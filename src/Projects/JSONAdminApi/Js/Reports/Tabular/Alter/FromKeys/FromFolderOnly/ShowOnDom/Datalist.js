const StartFunc = async ({ inData }) => {
    let jVarLocalDataList = document.getElementById("FolderNameList");

    jFLocalFromArray({
        inData,
        inDataListsID: jVarLocalDataList
    });
};

const jFLocalFromArray = ({ inData, inDataListsID }) => {
    inData.forEach(LoopItem => {
        let LocalDataList = document.createElement("datalist");
        LocalDataList.setAttribute("id", LoopItem.DatalistID);

        inDataListsID.appendChild(LocalDataList);

        LoopItem.Data.forEach(LoopItemSub => {
            let LocalDataListOption = document.createElement("option");
            LocalDataListOption.setAttribute("value", LoopItemSub[0]);

            if (LoopItemSub.length > 1) {
                LocalDataListOption.innerHTML = LoopItemSub[1];
            }

            LocalDataList.appendChild(LocalDataListOption);
        });
    });
};

export { StartFunc };