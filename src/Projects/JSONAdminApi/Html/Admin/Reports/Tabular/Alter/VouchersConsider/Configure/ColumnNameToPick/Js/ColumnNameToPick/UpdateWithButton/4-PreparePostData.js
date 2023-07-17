let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalColumnNameToPick = jVarLocalColsestTr.querySelector('[name="ColumnNameToPick"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalColumnNameToPickValue = jVarLocalColumnNameToPick.value;

    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        FileName: jVarLocalFileNameValue,
        ColumnNameToPick: jVarLocalColumnNameToPickValue
    };
    return await {
        ItemName: jVarLocalItemName,
        voucher: jVarLocalvoucherName,
        BodyAsJson
    };
};

export { StartFunc };