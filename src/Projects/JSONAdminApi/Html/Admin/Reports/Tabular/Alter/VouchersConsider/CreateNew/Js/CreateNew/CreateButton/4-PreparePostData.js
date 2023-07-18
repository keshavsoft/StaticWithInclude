let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");

    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalItemNameValue = jVarLocalItemName.value;

    return await {
        ReportName: jVarLocalreportname,
        FolderName: jVarLocalFolderNameValue,
        FileName: jVarLocalFileNameValue,
        ItemName: jVarLocalItemNameValue
    };
};

export { StartFunc };