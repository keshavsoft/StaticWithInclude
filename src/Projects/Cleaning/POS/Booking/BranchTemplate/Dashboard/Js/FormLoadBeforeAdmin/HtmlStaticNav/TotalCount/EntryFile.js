import { StartFunc as StartFuncOrdersId } from "./OrdersId/EntryFile.js";
import { StartFunc as StartFuncQrCodes } from "./QrCodes/EntryFile.js";
import { StartFunc as StartFuncDc } from "./DC/EntryFile.js";
import { StartFunc as StartFuncToFactory } from "./ToFactory/EntryFile.js";

const StartFunc = () => {
    StartFuncOrdersId();
    StartFuncQrCodes();
    StartFuncDc();
    StartFuncToFactory();

};

export { StartFunc };