import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "InwardsId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);

    jVarLocalLoadDataId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }