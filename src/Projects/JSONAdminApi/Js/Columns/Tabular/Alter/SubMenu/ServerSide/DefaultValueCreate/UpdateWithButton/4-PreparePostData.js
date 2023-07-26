let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalControlType = jVarLocalColsestTr.querySelector('[name="ControlType"]');
    let jVarLocalIncrementBy = jVarLocalColsestTr.querySelector('[name="IncrementBy"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="Type"]');
    let jVarLocalStartValue = jVarLocalColsestTr.querySelector('[name="StartValue"]');
    let jVarLocalConsiderFirmPeriod = jVarLocalColsestTr.querySelector('[name="ConsiderFirmPeriod"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalControlTypeValue = jVarLocalControlType.value;
    let jVarLocalIncrementByValue = jVarLocalIncrementBy.value;
    let jVarLocalTypeValue = jVarLocalType.value;
    let jVarLocalStartValueValue = jVarLocalStartValue.value;
    let jVarLocalTransformValue = jVarLocalConsiderFirmPeriod.checked;

    let BodyAsJson = {
        ControlType: jVarLocalControlTypeValue,
        IncrementBy: jVarLocalIncrementByValue,
        Type: jVarLocalTypeValue,
        StartValue: jVarLocalStartValueValue,
        ConsiderFirmPeriod: jVarLocalTransformValue
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