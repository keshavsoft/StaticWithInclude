import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";
import { StartFunc as StartFuncQRGenerateClass } from "./QRGenerateClass/1-ClickAssign.js";

let StartFunc = () => {
    StartFuncSettlementButtonClass();
    StartFuncQRGenerateClass();
};

export { StartFunc };