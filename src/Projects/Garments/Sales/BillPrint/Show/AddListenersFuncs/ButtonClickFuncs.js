import { StartFunc as StartFuncEntery } from "./BlockPrintFiles/Entery.js";

let StartFunc = () => {
    console.log("ooooppppp");
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", StartFuncEntery)
};

export { StartFunc };