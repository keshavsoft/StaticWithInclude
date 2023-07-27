let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalControlType = jVarLocalColsestTr.querySelector('[name="ControlType"]');
    let jVarLocalFormat = jVarLocalColsestTr.querySelector('[name="Format"]');
    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="Type"]');
    let jVarLocalTransform = jVarLocalColsestTr.querySelector('[name="Transform"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalControlTypeValue = jVarLocalControlType.value;
    let jVarLocalFormatValue = jVarLocalFormat.value;
    let jVarLocalTypeValue = jVarLocalType.value;
    let jVarLocalTransformValue = jVarLocalTransform.checked;

    let BodyAsJson = {
        ControlType: jVarLocalControlTypeValue,
        Format:jVarLocalFormatValue,
        Type: jVarLocalTypeValue,
        Transform:jVarLocalTransformValue
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