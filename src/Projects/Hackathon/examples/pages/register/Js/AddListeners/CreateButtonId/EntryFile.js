import { StartFunc as StartFuncButtonClickFunc } from './ButtonClickFunc.js'

let StartFunc = () => {
    let jVarLocalHtmlId = "CreateButtonId";
    let jVarLocalReportButtonId = document.getElementById(jVarLocalHtmlId);
    jVarLocalReportButtonId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }