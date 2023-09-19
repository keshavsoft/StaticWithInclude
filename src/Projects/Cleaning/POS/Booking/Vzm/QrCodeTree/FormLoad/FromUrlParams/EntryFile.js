import { StartFunc as StartFuncGoButton } from "./GoButtonScan/2-ButtonClickFunc.js";

let StartFunc = () => {
    let QrCode = getUrlQueryParams({ inGetKey: "Qrcode" })
    
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jFLocalToInputScanId({ inScanId: QrCode });
    let jVarLocalLength = jVarLocalScanId.value.trim().length;
    jVarLocalScanId.setSelectionRange(0,jVarLocalLength);

    if (QrCode === null === false) {
        StartFuncGoButton();
    }
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalToInputScanId = ({ inScanId }) => {
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jVarLocalScanId.value = inScanId;
};

export { StartFunc }