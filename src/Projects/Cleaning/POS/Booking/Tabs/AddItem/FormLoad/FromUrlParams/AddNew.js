import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncToLocalStorageAddOnData } from "../../../../../../../../../ToLocalStorage/AddOnData/Bulk.js";

let StartFunc = () => {
    StartFuncToLocalStorage({ inData: {} });
    StartFuncToLocalStorageAddOnData({ inData: {} });
};

export { StartFunc }