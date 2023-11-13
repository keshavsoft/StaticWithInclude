// import { StartFunc as StartFuncItemsInOrder } from "../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncAddOnData } from "../../ToLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncItemsInOrder } from "../../ToLocalStorage/AddOnData/Bulk.js";

const StartFunc = () => {
  StartFuncItemsInOrder({ inData: {} });
  StartFuncAddOnData({ inData: {} });
};

export { StartFunc };