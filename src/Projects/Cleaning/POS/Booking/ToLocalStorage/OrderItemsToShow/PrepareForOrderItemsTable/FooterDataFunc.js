import { StartFunc as StartFuncTotalAfterDiscount } from "./FooterDataFuncs/TotalAfterDiscount.js";
import { StartFunc as StartFuncTotalAmountOriginal } from "./FooterDataFuncs/TotalAmountOriginal.js";

let StartFunc = ({ inData }) => {
    let jVarLocalInData = inData;
    let jVarLocalFooterData = {};

    let jVarLocalTotalAfterDiscount = StartFuncTotalAfterDiscount({ inData: jVarLocalInData });
    let jVarLOcalTotalAmountOriginal = StartFuncTotalAmountOriginal({ inData: jVarLocalInData });

    jVarLocalFooterData.TotalAfterDiscount = jVarLocalTotalAfterDiscount;
    jVarLocalFooterData.TotalAmountOriginal = jVarLOcalTotalAmountOriginal;
    
    return jVarLocalFooterData;
};

export { StartFunc };