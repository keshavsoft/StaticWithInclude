import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/OrdersData/Single.js";
import { StartFunc as StartFuncPrepareData } from "./../PrepareData/StartFunc.js";
import { StartFunc as StartFuncToUrlWithDiscount } from "./ToUrlWithDiscount.js";
import { StartFunc as StartFuncToUrlWithoutDiscount } from "./ToUrlWithoutDiscount.js";
import { StartFunc as StartFuncItemsInOrder } from "../../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncFetchFuncs } from "../../../FetchFuncs/ToServer/NewOrder/5-FetchFunc.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = StartFuncPrepareData();
    console.log("jVarLocalToLocalStorage : ", jVarLocalToLocalStorage);
    // let jVarLocalOrderNumber = StartFuncToLocalStorage({ inEntry: jVarLocalToLocalStorage });

    let jVarLocalOrderNumber = StartFuncFetchFuncs({ inBodyData: jVarLocalToLocalStorage });

    if (jVarLocalOrderNumber > 0) {
        let jVarLocalIsDiscountGiven = jFlocalIsDiscountGiven();

        if (jVarLocalIsDiscountGiven === true) {
            StartFuncToUrlWithoutDiscount({
                inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
                inOrderNumber: jVarLocalOrderNumber
            });
        }
        else {
            StartFuncToUrlWithDiscount({
                inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
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

export { StartFunc }