import { StartFunc as StartFuncPrepareItemsInOrder } from "./PrepareItemsInOrder.js";

const StartFunc = () => {

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inJsonConfig = {};
    jVarLocalToLocalStorage.inJsonConfig.inFolderName = "Transactions";
    jVarLocalToLocalStorage.inJsonConfig.inJsonFileName = "Gurudwara.json";

    jVarLocalToLocalStorage.inItemConfig = {};
    jVarLocalToLocalStorage.inItemConfig.inItemName = 'Orders';

    jVarLocalToLocalStorage.inPostData = {
        ItemsInOrder: {}
    };
    jVarLocalToLocalStorage.inPostData.ItemsInOrder[1] = StartFuncPrepareItemsInOrder();

    return jVarLocalToLocalStorage;
};

export { StartFunc };