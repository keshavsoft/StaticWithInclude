import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }