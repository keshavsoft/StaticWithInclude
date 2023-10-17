import { StartFunc as StartFuncPresentOrderData } from "./PresentOrderData.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inJsonConfig = {};
    jVarLocalToLocalStorage.inJsonConfig.inFolderName = "Transactions";
    jVarLocalToLocalStorage.inJsonConfig.inJsonFileName = "Gurudwara.json";

    jVarLocalToLocalStorage.inItemConfig = {};
    jVarLocalToLocalStorage.inItemConfig.inItemName = 'Orders';

    jVarLocalToLocalStorage.inPostData = {
        ...StartFuncPresentOrderData(),
        CustomerData: StartFuncCustomerData(),
        OrderData: StartFuncOrderData()
    };

    return jVarLocalToLocalStorage;
};

export { StartFunc }