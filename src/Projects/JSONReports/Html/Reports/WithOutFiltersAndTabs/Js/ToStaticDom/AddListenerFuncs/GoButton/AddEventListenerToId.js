import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = async () => {
    let jVarLocalHtmlId = 'GoButtonOnDomId';
    let jVarLocalGoButtonOnDomId = document.getElementById(jVarLocalHtmlId);

    jVarLocalGoButtonOnDomId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };