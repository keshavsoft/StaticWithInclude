import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "DashboardId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);

    jVarLocalLoadDataId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }