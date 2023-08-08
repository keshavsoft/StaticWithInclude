// import { StartFunc as StartFuncOrdersData } from "../../../../../../../../../../ToLocalStorage/OrdersData/Single.js";
import { StartFunc as StartFuncPrepareData } from "./../PrepareData/StartFunc.js";
import { StartFunc as StartFuncToUrlWithDiscount } from "./ToUrlWithDiscount.js";
import { StartFunc as StartFuncToUrlWithoutDiscount } from "./ToUrlWithoutDiscount.js";
// import { StartFunc as StartFuncItemsInOrder } from "../../../../../../../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncItemsInOrder } from "../../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/OrdersData/ItemsInOrder.js";


// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/OrdersData/ItemsInOrder.js";
// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/OrdersData/ItemsInOrder.js";

const StartFunc = () => {
    let jVarLocalOrderNumberFromDom = jFLocalFromDomOrderNumberId();
    let jVarLocalToLocalStorage = StartFuncPrepareData();
    //let jVarLocalOrderNumber = StartFuncOrdersData({ inEntry: jVarLocalToLocalStorage });
    let jVarLocalOrderNumber = StartFuncToLocalStorage({
        inEntry: jVarLocalToLocalStorage,
        inPk: jVarLocalOrderNumberFromDom
    });
    
    if (jVarLocalOrderNumber > 0) {
        let jVarLocalIsDiscountGiven = jFlocalIsDiscountGiven();

        if (jVarLocalIsDiscountGiven === true) {
            StartFuncToUrlWithoutDiscount({
                //  inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
                inBranchName: "Hello",
                inOrderNumber: jVarLocalOrderNumber
            });
        }
        else {
            StartFuncToUrlWithDiscount({
                // inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
                inBranchName: "Hello",
                inOrderNumber: jVarLocalOrderNumber
            });
        }
    };
};
let jFlocalIsDiscountGiven = () => {

    let jVarLocalItemData = StartFuncItemsInOrder();
    let jVarLocalFiltered = Object.values(jVarLocalItemData).filter(element => {
        return element.DisPer > 0;
    });

    if (jVarLocalFiltered.length > 0) return true;
    return false;

};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML;
    return jVarHtmlOrderNumberIdValue;
};

export { StartFunc }