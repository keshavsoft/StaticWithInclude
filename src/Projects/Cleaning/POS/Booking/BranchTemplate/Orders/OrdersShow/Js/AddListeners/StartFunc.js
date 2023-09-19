import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";
import { StartFunc as StartFuncQRGenerateClass } from "./QRGenerateClass/1-ClickAssign.js";
let StartFunc = () => {
    StartFuncSettlementButtonClass();
    StartFuncQRGenerateClass();
    // let jVarLocalClassName = document.getElementsByClassName("SettlementButtonClass");

    // for (let i = 0; i < jVarLocalClassName.length; i++) {
    //     jVarLocalClassName[i].addEventListener('click', () => {

    //         let jVarLocalEvent = event;
    //         let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    //         let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;

    //         if ("ordernumber" in jVarLocalDataSet) {
    //             let jVarLocalOrderNumber = jVarLocalDataSet.ordernumber;
    //         }
    //     });
    // }
};

export { StartFunc };