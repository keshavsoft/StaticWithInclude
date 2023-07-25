let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDataListReverse = jVarLocalColsestTr.querySelector('[name="KTF"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="list"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDataListReverseValue = jVarLocalDataListReverse.checked;
    let jVarLocalTypeValue = jVarLocalType.value;

    let BodyAsJson = {
        KTF: jVarLocalDataListReverseValue,
        list: jVarLocalTypeValue
    }

    return {
        folderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        DataAttribute: jVarLocalDataAttributeValue,
        BodyAsJson
    };
};

export { StartFunc };