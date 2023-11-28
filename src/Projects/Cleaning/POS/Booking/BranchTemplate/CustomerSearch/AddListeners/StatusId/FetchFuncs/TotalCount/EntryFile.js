import { StartFunc as StartFuncTotalOrders } from "./TotalOrders/EntryFile.js";
import { StartFunc as StartFuncTotalQrCodes } from "./TotalQrCodes/EntryFile.js";

let StartFunc = async () => {
    StartFuncTotalOrders();
    StartFuncTotalQrCodes();
};

export { StartFunc };