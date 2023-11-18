import { StartFunc as StartFuncTotalQrCodes } from "./TotalQrCodes/EntryFile.js";
import { StartFunc as StartFuncTotalDc } from "./TotalDc/EntryFile.js";
import { StartFunc as StartFuncTotalusers } from "./Totalusers/EntryFile.js";
import { StartFunc as StartFuncTotalItems } from "./TotalItems/EntryFile.js";

let StartFunc = async () => {

    StartFuncTotalQrCodes();
    StartFuncTotalDc();
    StartFuncTotalusers();
    StartFuncTotalItems();
};

export { StartFunc };