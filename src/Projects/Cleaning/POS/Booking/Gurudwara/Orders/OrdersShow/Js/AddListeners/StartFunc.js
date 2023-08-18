import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";

let StartFunc = () => {
    StartFuncSettlementButtonClass();

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