import { StartFunc as StartFuncAddOnInsertButtonClick } from "./AddOnInsertButton/2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", StartFuncAddOnInsertButtonClick);
};

export { StartFunc };