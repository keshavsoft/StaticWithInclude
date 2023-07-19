let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFromFolder = jVarLocalColsestTr.querySelector('[name="FromFolder"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFromFolderValue = jVarLocalFromFolder.checked;

    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        FromFolder: jVarLocalFromFolderValue

    };
    return await {
        ReportName: jVarLocalItemName,
        VoucherPk: jVarLocalvoucherName,
        BodyAsJson
    };
};

export { StartFunc };