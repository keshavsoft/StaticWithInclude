let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherPk = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalItemNam = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalItemNameConsider = jVarLocalColsestTr.querySelector('[name="ItemNameConsider"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalItemNamValue = jVarLocalItemNam.value;
    let jVarLocalItemNameConsiderValue = jVarLocalItemNameConsider.checked;


    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        // FromFolder: jVarLocalFromFolderValue,
        FileName: jVarLocalFileNameValue,
        ItemName: jVarLocalItemNamValue,
        ItemNameConsider: jVarLocalItemNameConsiderValue

    };

    return await {
        ReportName: jVarLocalItemName,
        VoucherPk: jVarLocalvoucherPk,
        BodyAsJson
    };
};

export { StartFunc };