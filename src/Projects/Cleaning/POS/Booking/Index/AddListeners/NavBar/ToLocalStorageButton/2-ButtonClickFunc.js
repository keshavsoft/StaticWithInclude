import { StartFunc as StartFuncCustomers } from "./Customers/2-ButtonClickFunc.js";
import { StartFunc as StartFuncItems } from "./Items/2-ButtonClickFunc.js";

let StartFunc = async () => {
    StartFuncCustomers();
    StartFuncItems();
};

export { StartFunc };