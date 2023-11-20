import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalHtmlId = "InputUserNameId";
    let jVarLocalGetHtmlId = document.getElementById(jVarLocalHtmlId);

    jVarLocalGetHtmlId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc };