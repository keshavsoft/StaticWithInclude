import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalHtmlId = "TerminationButtonId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);
    if (jVarLocalGetHtmlId === null === false) {
        jVarLocalGetHtmlId.addEventListener("click", StartFuncButtonClickFunc);
    }
};

export { StartFunc };