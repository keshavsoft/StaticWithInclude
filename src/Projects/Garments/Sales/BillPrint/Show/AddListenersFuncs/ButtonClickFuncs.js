import { StartFunc as StartFuncEntry } from "./BlockPrintFiles/Entry.js";

let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", StartFuncEntry)
};

export { StartFunc };