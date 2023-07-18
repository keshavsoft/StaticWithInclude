const StartFunc = async ({ inData }) => {
    let jVarLocalDataList = document.getElementById("FolderNameList");

    jFLocalFromArray({
        inData,
        inDataListsID: jVarLocalDataList
    });
};

const jFLocalFromArray = ({ inData, inDataListsID }) => {
    inData.forEach(LoopItem => {
        let LocalDataListOption = document.createElement("option");

        LocalDataListOption.setAttribute("value", LoopItem);

        inDataListsID.appendChild(LocalDataListOption);
    });
};

export { StartFunc };