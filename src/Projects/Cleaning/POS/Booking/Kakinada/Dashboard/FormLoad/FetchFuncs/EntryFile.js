import { StartFunc as StartFuncCustomers } from "./Customers/2-ButtonClickFunc.js";
import { StartFunc as StartFuncItems } from "./Items/2-ButtonClickFunc.js";
import { StartFunc as StartFuncOrdersData } from "./OrdersData/Initialize.js";

let StartFunc = async () => {
    StartFuncCustomers();
    StartFuncItems();
    StartFuncOrdersData();
};

export { StartFunc };