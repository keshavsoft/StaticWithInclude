// import { StartFunc as StartFuncItems } from "../../../../ToLocalStorage/Items.js";
// import { StartFunc as StartFuncItemsInOrder } from "../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
// import { StartFunc as StartFuncAddOnData } from "../../../../ToLocalStorage/AddOnData/Bulk.js";
import { StartFunc as StartFuncItemsInOrder } from "../../../../../ToLocalStorage/AddOnData/Bulk.js";
import { StartFunc as StartFuncAddOnData } from "../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";


const StartFunc = () => {
  // StartFuncItems({ inData: {} });
  StartFuncItemsInOrder({ inData: {} });
  StartFuncAddOnData({ inData: {} });
};

export { StartFunc }