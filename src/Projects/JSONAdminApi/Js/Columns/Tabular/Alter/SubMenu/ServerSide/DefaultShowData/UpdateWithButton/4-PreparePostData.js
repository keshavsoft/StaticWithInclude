let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalControlType = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalIncrementBy = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalStartValue = jVarLocalColsestTr.querySelector('[name="CheckColumnName"]');
    let jVarLocalConsiderFirmPeriod = jVarLocalColsestTr.querySelector('[name="FilterString"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalControlTypeValue = jVarLocalControlType.value;
    let jVarLocalIncrementByValue = jVarLocalIncrementBy.value;
    let jVarLocalTypeValue = jVarLocalType.value;
    let jVarLocalStartValueValue = jVarLocalStartValue.value;
    let jVarLocalTransformValue = jVarLocalConsiderFirmPeriod.value;

    let BodyAsJson = {
        FolderName: jVarLocalControlTypeValue,
        FileName: jVarLocalIncrementByValue,
        ItemName: jVarLocalTypeValue,
        CheckColumnName: jVarLocalStartValueValue,
        FilterString: jVarLocalTransformValue
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