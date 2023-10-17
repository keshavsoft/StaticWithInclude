const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    let jVarLocalScanId = jFLocalFromDomScanId();
    let jVarLocalArray = jVarLocalScanId.split("~");
    let jVarLocalJsonPk = jVarLocalArray[0].trim();

    jVarLocalToLocalStorage.FolderName = "QrCodes";
    jVarLocalToLocalStorage.FileNameOnly = "Generate";
    jVarLocalToLocalStorage.ItemName = "Barcodes";
    jVarLocalToLocalStorage.JsonPk = jVarLocalJsonPk;

    return jVarLocalToLocalStorage;
};

let jFLocalFromDomScanId = () => {
    let jVarLocalHtmlScanId = 'ScanId';
   let jVarHtmlScanId = document.getElementById(jVarLocalHtmlScanId);
   let jVarHtmlScanIdValue = jVarHtmlScanId.value.trim();
   return jVarHtmlScanIdValue;
};

export { StartFunc };