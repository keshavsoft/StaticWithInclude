import { StartFunc as StartFuncButtonClickFunc } from './ButtonClickFunc.js'

let StartFunc = () => {
    let jVarLocalReportButtonId = document.getElementById("ReportButtonId");
    jVarLocalReportButtonId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }