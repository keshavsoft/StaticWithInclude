import { StartFunc as StartFuncBSTableNewUrl } from "./HomeIdUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'HomeId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTreeId.addEventListener("click", StartFuncBSTableNewUrl);
};

export { StartFunc };