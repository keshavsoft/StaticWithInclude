let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalIsIndianFormat = jVarLocalColsestTr.querySelector('[name="IsIndianFormat"]');
    let jVarLocalIsInput = jVarLocalColsestTr.querySelector('[name="IsInput"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocaljVarLocalIsIndianFormatValue = jVarLocalIsIndianFormat.checked;
    let jVarLocaljVarLocalIsInputValue = jVarLocalIsInput.checked;

    let BodyAsJson = {
        IsIndianFormat: jVarLocaljVarLocalIsIndianFormatValue,
        IsInput: jVarLocaljVarLocalIsInputValue
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