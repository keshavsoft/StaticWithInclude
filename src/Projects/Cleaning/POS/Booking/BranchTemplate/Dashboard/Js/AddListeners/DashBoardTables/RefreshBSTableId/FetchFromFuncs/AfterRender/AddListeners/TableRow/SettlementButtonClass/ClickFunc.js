import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";

let StartFunc = () => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;
    let jVarLocalIsSettled = jVarLocalDataSet.issettled;

    if ('ordernumber' in jVarLocalDataSet) {
        let jVarLocalordernumber = jVarLocalDataSet.ordernumber;
        
        StartFuncCheckFunc({ inOrderNumber: jVarLocalordernumber });
    };
};

export { StartFunc };