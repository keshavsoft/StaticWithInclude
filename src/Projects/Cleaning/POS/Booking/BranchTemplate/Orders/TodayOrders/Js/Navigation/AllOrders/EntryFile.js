import { StartFunc as StartFuncURLNavigation } from "./URLNavigation.js";

let StartFunc = () => {
    let jVarLocalNavId = document.getElementById("AllOrdersId");
    jVarLocalNavId.addEventListener("click", StartFuncURLNavigation)
};

export { StartFunc };