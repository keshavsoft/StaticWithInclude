let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDefaultValue = jVarLocalColsestTr.querySelector('[name="DefaultValue"]');
    let jVarLocalTextAlign = jVarLocalColsestTr.querySelector('[name="TextAlign"]');


    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDefaultValueValue = jVarLocalDefaultValue.value;
    let jVarLocalTextAlignValue = jVarLocalTextAlign.value;

    let BodyAsJson = {
        DefaultValue: jVarLocalDefaultValueValue,
        TextAlign: jVarLocalTextAlignValue
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