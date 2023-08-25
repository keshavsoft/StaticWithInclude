// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";
// import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/StartFunc.js";
import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/EntryFile.js";

const StartFunc = ({ inPk }) => {
    StartFuncShowOrderDetails({ inPk });
};

const StartFunc1 = ({ inPk }) => {
    // let jVarLocalData = StartFuncFromLocalStorage({ inPk });

    // jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.JsonData.CustomerData.CustomerName });
    // jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.JsonData.CustomerData.CustomerMobile });
    // jFLocalItemDetails({ inData: jVarLocalData.JsonData });
};

let jFLocalItemDetails = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData.ItemsInOrder).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalOrderAmountId({ inOrderAmountId: sum });
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
export { StartFunc };