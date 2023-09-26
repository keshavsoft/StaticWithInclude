import { StartFunc as StartFuncToUrl } from "./ToUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "NavSearchId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split("~");
    let jVarLocalQrCode = jVarLocalArray[0].trim();

    if (jVarLocalQrCode === "" === false) {
        StartFuncToUrl({
            inQrCode: jVarLocalQrCode
        });
    };

};

export { StartFunc };