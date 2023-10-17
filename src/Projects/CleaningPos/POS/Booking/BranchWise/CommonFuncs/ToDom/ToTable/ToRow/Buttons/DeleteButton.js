import { StartFunc as StartFuncDeleteFunc } from "../../../../../../ToLocalStorage/ItemsInOrder/DeleteFunc.js";
import { StartFunc as StartFuncAddOnData } from "../../../../../../ToLocalStorage/AddOnData/DeleteFunc.js";

import { StartFunc as StartFuncToOrderItems } from "../../ToOrderItems.js";

const StartFunc = ({ inItemSerial, inClonedTemplateRow }) => {
    let jVarLocalOrderItemsOrderItemsDeleteButtonClass = inClonedTemplateRow.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click", jFLocalItemDeleteButtonClickFunc);
};

const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalitemserial = jVarLocalDataset.itemserial;

    let jVarLocalFromDelete = StartFuncDeleteFunc({ inKey: jVarLocalitemserial });
    StartFuncAddOnData({ inKey: jVarLocalitemserial });

    if (jVarLocalFromDelete) {
        StartFuncToOrderItems();
    };
};

export { StartFunc };