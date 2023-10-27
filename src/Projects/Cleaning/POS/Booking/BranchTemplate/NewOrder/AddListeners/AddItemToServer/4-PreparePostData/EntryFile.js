import { StartFunc as StartFuncPrepareItemsInOrder } from "./PrepareItemsInOrder.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";
import ConfigJson from "../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inFolderName = "Transactions";
    jVarLocalToLocalStorage.inFileNameOnly = ConfigJson.ForFetch.FileNameOnly;

    jVarLocalToLocalStorage.inItemName = 'Orders';
    jVarLocalToLocalStorage.inScreenName = 'Create';

    let jVarLocalCustomerData = StartFuncCustomerData();
    let jVarLocalOrderData = StartFuncOrderData();

    jVarLocalToLocalStorage.inDataToInsert = {};
    jVarLocalToLocalStorage.inDataToInsert.ItemsInOrder = {};
    jVarLocalToLocalStorage.inDataToInsert.CustomerData = jVarLocalCustomerData;
    jVarLocalToLocalStorage.inDataToInsert.OrderData = jVarLocalOrderData;
    jVarLocalToLocalStorage.inDataToInsert.AddOnData = {};
    jVarLocalToLocalStorage.inDataToInsert.CheckOutData = {};
    jVarLocalToLocalStorage.inDataToInsert.ItemsInOrder[1] = StartFuncPrepareItemsInOrder();

    return jVarLocalToLocalStorage;
};

const StartFunc1 = () => {
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
    jVarLocalToLocalStorage.inPostData.AddOnData = {};
    jVarLocalToLocalStorage.inPostData.CheckOutData = {};

    jVarLocalToLocalStorage.inPostData.ItemsInOrder[1] = StartFuncPrepareItemsInOrder();

    return jVarLocalToLocalStorage;
};

export { StartFunc };