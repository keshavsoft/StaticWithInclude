import { StartFunc as StartFuncURLNavigation } from "./URLNavigation.js";

let StartFunc = () => {
    let jVarLocalNavId = document.getElementById("OrdersId");
    jVarLocalNavId.addEventListener("click", StartFuncURLNavigation)
};

export { StartFunc };