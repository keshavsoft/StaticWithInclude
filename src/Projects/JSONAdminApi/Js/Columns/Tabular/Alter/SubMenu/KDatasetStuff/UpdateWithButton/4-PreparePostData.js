let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalValidate = jVarLocalColsestTr.querySelector('[name="Validate"]');
    let jVarLocalDataListReverse = jVarLocalColsestTr.querySelector('[name="DataListReverse"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="Type"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalValidateValue = jVarLocalValidate.checked;
    let jVarLocalDataListReverseValue = jVarLocalDataListReverse.checked;
    let jVarLocalTypeValue = jVarLocalType.value;

    let BodyAsJson = {
        Validate: jVarLocalValidateValue,
        DataListReverse: jVarLocalDataListReverseValue,
        Type: jVarLocalTypeValue
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