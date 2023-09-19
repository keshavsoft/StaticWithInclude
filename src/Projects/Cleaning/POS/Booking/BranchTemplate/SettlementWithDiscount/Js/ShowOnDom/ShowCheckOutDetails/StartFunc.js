import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({ inPk });

    jFLocalCashAmountId({ inCashAmountId:jVarLocalData });

    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.JsonData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.JsonData.CustomerData.CustomerMobile });
    jFLocalOrderAmount({ inData: jVarLocalData.JsonData });
};

let jFLocalOrderAmount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData.ItemsInOrder).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    let jVarLocalAddOn = Object.values(inData.AddOnData).map(element => {
        return element.AddOnRate;
    });

    const sumOfAddOn = jVarLocalAddOn.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalOrderAmountId({ inOrderAmountId: sum + sumOfAddOn });
};

let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.innerHTML = inOrderInfoCustomerNameId;
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.innerHTML = inOrderInfoCustomerMobileId;
};

let jFLocalCashAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CashAmountId';
    let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCashAmountId.innerHTML = inCashAmountId;
};

export { StartFunc };