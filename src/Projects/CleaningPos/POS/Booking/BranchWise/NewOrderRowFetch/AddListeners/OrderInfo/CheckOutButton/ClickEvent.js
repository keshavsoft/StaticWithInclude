import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "CheckOutId";
    let jVarLocalCheckOutId = document.getElementById(jVarLocalHtmlId);

    jVarLocalCheckOutId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }