import { StartFunc as StartFuncPresentOrderData } from "./PresentOrderData.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage = {
        ...StartFuncPresentOrderData(),
        CustomerData: StartFuncCustomerData(),
        OrderData: StartFuncOrderData()
    };

    return jVarLocalToLocalStorage;
};

export { StartFunc }