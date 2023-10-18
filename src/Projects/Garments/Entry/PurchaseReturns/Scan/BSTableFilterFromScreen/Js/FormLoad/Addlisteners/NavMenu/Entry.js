import { StartFunc as StartFuncNewURL } from "./NewURL.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'NoAlertIdId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTreeId.addEventListener("click", () => StartFuncNewURL());
};

export { StartFunc };