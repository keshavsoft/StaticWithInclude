import { StartFunc as StartFuncNewOrder } from "./NewOrder/StartFunc.js";
import { StartFunc as StartFuncOldOrder } from "./OldOrder/StartFunc.js";
import { StartFunc as StartFuncAddNew } from "./AddNew.js";

let StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jFLocalAddNew = getUrlQueryParams({ inGetKey: "AddNew" });

    if (jFLocalAddNew === "true") {
        StartFuncNewOrder();
        StartFuncAddNew();
    } else {
        if (jFLocalOrderNumber === null) {
            StartFuncNewOrder();
        } else {
            StartFuncOldOrder();
        };
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }