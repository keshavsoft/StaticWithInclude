import { StartFunc as StartFuncFromLocalStorageOrderItemsToShow } from "../../../../../FromLocalStorage/OrderItemsToShow/Bulk.js";

const StartFunc = () => {
    let jVarLocalDataNeeded = StartFuncFromLocalStorageOrderItemsToShow();

    jFLocalOrderAmount({ inData: jVarLocalDataNeeded.BodyData });
};

let jFLocalOrderAmount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalOrderAmountId({ inOrderAmountId: sum });
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};

export { StartFunc };