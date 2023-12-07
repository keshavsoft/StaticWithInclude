import { StartFunc as StartFuncURLNavigation } from "./URLNavigation.js";

let StartFunc = () => {
    let jVarLocalNavId = document.getElementById("QrCodesId");
    jVarLocalNavId.addEventListener("click", StartFuncURLNavigation)
};

export { StartFunc };