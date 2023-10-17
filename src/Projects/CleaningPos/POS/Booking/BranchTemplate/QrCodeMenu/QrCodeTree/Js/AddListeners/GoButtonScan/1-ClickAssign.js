import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "GoButtonid";
    let jVarLocalCreateFolderButtonId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
    let jVarLocalHtmlScanId = "ScanId";
    let jVarLocalHtmlScanIdElement = document.getElementById(jVarLocalHtmlScanId);

    jVarLocalHtmlScanIdElement.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) {
            StartFuncButtonClickFunc();
        }
    });
};

export { StartFunc };