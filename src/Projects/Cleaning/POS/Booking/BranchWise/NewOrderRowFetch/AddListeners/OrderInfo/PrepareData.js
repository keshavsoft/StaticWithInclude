import { StartFunc as StartFuncItemsInOrder } from "../../LocalStorageFunc/ItemsInOrder/ReturnData.js";
import { StartFunc as StartFuncAddOnData } from "../../LocalStorageFunc/AddOnData/ReturnData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};
    jVarLocalToLocalStorage.ItemsInOrder = StartFuncItemsInOrder();
    jVarLocalToLocalStorage.AddOnData = StartFuncAddOnData();

    return jVarLocalToLocalStorage;
};

export { StartFunc }