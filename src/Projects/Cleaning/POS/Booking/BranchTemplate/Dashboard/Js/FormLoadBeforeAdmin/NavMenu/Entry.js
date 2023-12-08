import { StartFunc as StartFuncBSTableURL } from "./FactoryParamId/Entry.js";
import { StartFunc as StartFuncOrders } from "./Orders/EntryFile.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncOrders();
};

export { StartFunc };