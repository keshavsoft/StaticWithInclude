import { StartFunc as StartFuncTotalOrders } from "./TotalOrders/EntryFile.js";
import { StartFunc as StartFuncTotalQrCodes } from "./TotalQrCodes/EntryFile.js";
import { StartFunc as StartFuncTotalDC } from "./TotalDC/EntryFile.js";
import { StartFunc as StartFuncTotalToFactory } from "./TotalToFactory/EntryFile.js";

let StartFunc = () => {
    StartFuncTotalOrders().then();
    StartFuncTotalQrCodes().then();
    StartFuncTotalDC();
    StartFuncTotalToFactory();
};

export { StartFunc };