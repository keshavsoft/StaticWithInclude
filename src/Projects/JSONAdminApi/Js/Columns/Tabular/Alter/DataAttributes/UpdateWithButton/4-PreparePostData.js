let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDataAttribute1 = jVarLocalColsestTr.querySelector('[name="DataAttribute1"]');


    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDataAttributeValue1 = jVarLocalDataAttribute1.value;

    let BodyAsJson = {
        DataAttribute1: jVarLocalDataAttributeValue1
    }

    return {
        FolderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        DataAttribute: jVarLocalDataAttributeValue,
        BodyAsJson
    };
};

export { StartFunc };