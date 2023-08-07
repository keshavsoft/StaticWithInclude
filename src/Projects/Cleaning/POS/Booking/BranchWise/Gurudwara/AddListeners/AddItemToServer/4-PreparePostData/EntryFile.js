import { StartFunc as StartFuncPrepareItemsInOrder } from "./PrepareItemsInOrder.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";
import ConfigJson from "./Config.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inJsonConfig = {};
    jVarLocalToLocalStorage.inJsonConfig.inFolderName = "Transactions";
    jVarLocalToLocalStorage.inJsonConfig.inJsonFileName = ConfigJson.JsonFileName;

    jVarLocalToLocalStorage.inItemConfig = {};
    jVarLocalToLocalStorage.inItemConfig.inItemName = 'Orders';

    let jVarLocalCustomerData = StartFuncCustomerData();
    let jVarLocalOrderData = StartFuncOrderData();

    jVarLocalToLocalStorage.inPostData = {};
    jVarLocalToLocalStorage.inPostData.ItemsInOrder = {};
    jVarLocalToLocalStorage.inPostData.CustomerData = jVarLocalCustomerData;
    jVarLocalToLocalStorage.inPostData.OrderData = jVarLocalOrderData;

    jVarLocalToLocalStorage.inPostData.ItemsInOrder[1] = StartFuncPrepareItemsInOrder();

    return jVarLocalToLocalStorage;
};

export { StartFunc };