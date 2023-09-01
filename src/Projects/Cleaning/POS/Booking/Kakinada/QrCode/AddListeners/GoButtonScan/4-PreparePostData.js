const StartFunc = () => {
    let jVarLocalToLocalStorage = {};
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    jVarLocalToLocalStorage.FolderName = "QrCodes";
    jVarLocalToLocalStorage.FileNameOnly = "Generate";
    jVarLocalToLocalStorage.ItemName = "Barcodes";
    jVarLocalToLocalStorage.JsonPk = jVarLocalScanIdValue;

    return jVarLocalToLocalStorage;
};

export { StartFunc };