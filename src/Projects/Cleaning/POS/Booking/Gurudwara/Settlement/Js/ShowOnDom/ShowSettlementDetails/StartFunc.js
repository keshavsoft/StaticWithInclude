import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({ inPk });

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