let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDouble = jVarLocalColsestTr.querySelector('[name="Double"]');
    let jVarLocalBarcode = jVarLocalColsestTr.querySelector('[name="Barcode"]');

    let jVarLocalDoubleValue = jVarLocalDouble.checked;
    let jVarLocalBarcodeValue = jVarLocalBarcode.checked;

    let BodyAsJson = {
        Double: jVarLocalDoubleValue,
        Barcode: jVarLocalBarcodeValue
    };

    return {
        folderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        BodyAsJson
    };
};

export { StartFunc };