import { StartFunc as StartFuncEntry } from "./BlockPrintFiles/Entry.js";
import { StartFunc as StartFuncEntry2 } from "./BlockPrintFiles 2/Entry.js";
import { StartFunc as StartFuncEntry3 } from "./BlockPrintFiles 3/Entry.js";

let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", StartFuncEntry)

    let LocalPrintId1 = document.getElementById("PrintId2");
    LocalPrintId1.addEventListener("click", StartFuncEntry2)

    let LocalPrintId2 = document.getElementById("PrintId3");
    LocalPrintId2.addEventListener("click", StartFuncEntry3)

   
};

export { StartFunc };