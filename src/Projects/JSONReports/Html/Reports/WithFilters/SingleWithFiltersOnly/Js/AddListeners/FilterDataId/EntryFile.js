import { StartFunc as StartFuncButtonClick } from "./ButtonClick.js";

let StartFunc = () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", StartFuncButtonClick);
};

export { StartFunc }