import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", await StartFuncButtonClickFunc);
};

export { StartFunc }