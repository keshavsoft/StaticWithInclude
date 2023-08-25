// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPk.js";

import ApiConfigJson from "../../../../ApiConfig.json" assert { type: "json" };

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: ApiConfigJson.BranchName
    });

    if (jVarLocalData.KTF === false) {
        return "";
    };

    if ("JsonData" in jVarLocalData === false) {
        return "";
    };
    
    if ("CheckOutData" in jVarLocalData.JsonData === false) {
        return "";
    };

    jFLocalToInputCashAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.CashAmount });
    jFLocalToInputUPIAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.UPIAmount });
    jFLocalToInputCardAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.CardAmount });
};

let jFLocalToInputCashAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CashAmountId';
    let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCashAmountId.value = inCashAmountId;
};

let jFLocalToInputUPIAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'UPIAmountId';
    let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalUPIAmountId.value = inCashAmountId;
};

let jFLocalToInputCardAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CardAmountId';
    let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCardAmountId.value = inCashAmountId;
};

export { StartFunc };