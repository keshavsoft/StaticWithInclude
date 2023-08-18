import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncOrderItemsToShow } from "../OrderItemsToShow/PrepareForOrderItemsTable.js";

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.ItemsInOrder, JSON.stringify(inData));

    StartFuncOrderItemsToShow();
};

export { StartFunc };