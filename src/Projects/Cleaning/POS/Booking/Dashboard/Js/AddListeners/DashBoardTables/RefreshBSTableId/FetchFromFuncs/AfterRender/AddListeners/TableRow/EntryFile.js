import { StartFunc as StartFuncQRGenerateClass } from "./QRGenerateClass/1-ClickAssign.js";
// import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";

let StartFunc = () => {
    StartFuncQRGenerateClass();
    // StartFuncSettlementButtonClass();
};

export { StartFunc };