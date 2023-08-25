// import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/OrdersData/SingleWithPk.js";

let StartFunc = async ({ inFromFetch, inPk, inBranchName }) => {
    let data = inFromFetch;

    if (data) {
        StartFuncToLocalStorage({ inEntry: data.JsonData, inPk, inBranchName });
    };
};

export { StartFunc };
