import { StartFunc as StartFuncPrepareItemsInOrder } from "./PrepareItemsInOrder.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";
// import ConfigJson from "../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inFolderName = "Transactions";
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })

    jVarLocalToLocalStorage.inFileNameOnly = jVarLocalBranchName;

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
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };