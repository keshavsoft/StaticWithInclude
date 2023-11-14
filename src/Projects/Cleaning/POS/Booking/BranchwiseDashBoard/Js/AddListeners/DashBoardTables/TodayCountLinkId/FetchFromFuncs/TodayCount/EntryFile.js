import { StartFunc as StartFuncTodayOrders } from "./TodayOrders/EntryFile.js";
import { StartFunc as StartFuncTodayQrCodes } from "./TodayQrCodes/EntryFile.js";
import { StartFunc as StartFuncTodayDC } from "./TodayDC/EntryFile.js";
import { StartFunc as StartFuncTodayToFactory } from "./TodayToFactory/EntryFile.js";

let StartFunc = async () => {

    StartFuncTodayOrders();
    StartFuncTodayQrCodes();
    StartFuncTodayDC();
    StartFuncTodayToFactory();
};

export { StartFunc };