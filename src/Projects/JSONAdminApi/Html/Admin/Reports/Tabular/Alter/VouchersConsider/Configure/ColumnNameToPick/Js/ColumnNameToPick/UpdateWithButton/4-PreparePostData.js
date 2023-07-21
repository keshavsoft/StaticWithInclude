let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalVoucherName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalColumnNameToPick = jVarLocalColsestTr.querySelector('[name="ColumnNameToPick"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalColumnNameToPickValue = jVarLocalColumnNameToPick.value;
    let jVarLocalItemNameValue = jVarLocalItemName.value;

    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        FileName: jVarLocalFileNameValue,
        ItemName: jVarLocalItemNameValue,
        ColumnNameToPick: jVarLocalColumnNameToPickValue
    };
    return await {
        ItemName: jVarLocalVoucherName,
        voucher: jVarLocalvoucherName,
        BodyAsJson
    };
};

export { StartFunc };