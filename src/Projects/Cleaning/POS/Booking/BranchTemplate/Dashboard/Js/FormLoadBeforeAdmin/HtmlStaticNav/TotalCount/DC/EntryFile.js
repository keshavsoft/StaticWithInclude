import { StartFunc as StartFuncBSTableNewUrl } from "./Nav.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'TotalDcNavId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    if (jVarlocalBSTreeId === null === false) {
        jVarlocalBSTreeId.addEventListener("click", StartFuncBSTableNewUrl);
    };
};

export { StartFunc };