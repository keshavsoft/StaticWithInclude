// import { StartFunc as StartFuncItemsInOrder } from "../../../LocalStorageFunc/ItemsInOrder/ReturnData.js";
// import { StartFunc as StartFuncAddOnData } from "../../../../../ /AddOnData/ReturnData.js";

import { StartFunc as StartFuncAddOnData } from "../../../LocalStorageFunc/AddOnData/ReturnData.js";

// import { StartFunc as StartFuncItemsInOrder } from "../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncItemsInOrder } from "../../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};
    jVarLocalToLocalStorage.ItemsInOrder = StartFuncItemsInOrder();
    jVarLocalToLocalStorage.AddOnData = StartFuncAddOnData();

    return jVarLocalToLocalStorage;
};

export { StartFunc }