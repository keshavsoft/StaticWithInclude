const StartFunc = () => {
    let jVarLocalToLocalStorage = {};
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split("~");
    let jVarLocalJsonPk = jVarLocalArray[0].trim();

    jVarLocalToLocalStorage.FolderName = "QrCodes";
    jVarLocalToLocalStorage.FileNameOnly = "Generate";
    jVarLocalToLocalStorage.ItemName = "Barcodes";
    jVarLocalToLocalStorage.JsonPk = jVarLocalJsonPk;

    return jVarLocalToLocalStorage;
};

export { StartFunc };