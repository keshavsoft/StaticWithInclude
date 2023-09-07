const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    let jVarLocalJsonPk = jFLocalFromDomScanId();

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