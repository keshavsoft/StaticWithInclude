import { StartFunc as StartFuncNewOrder } from "./NewOrder/StartFunc.js";
import { StartFunc as StartFuncAddNew } from "./AddNew.js";

let StartFunc = () => {
    StartFuncNewOrder();
    StartFuncAddNew();
};

export { StartFunc }