import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalQrcodeValue = getUrlQueryParams({ inGetKey: "Qrcode" });

    if ((jVarLocalQrcodeValue === null === false)) {
        jFLocalToInputScanId({ inScanId: jVarLocalQrcodeValue });
        StartFuncButtonClickFunc();
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


export { StartFunc };