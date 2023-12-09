import { StartFunc as StartFuncBSTableNewUrl } from "./FactoryParamId.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'DCBRDId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    if (jVarlocalBSTreeId === null === false) {
        jVarlocalBSTreeId.addEventListener("click", StartFuncBSTableNewUrl);
    };
};

export { StartFunc };