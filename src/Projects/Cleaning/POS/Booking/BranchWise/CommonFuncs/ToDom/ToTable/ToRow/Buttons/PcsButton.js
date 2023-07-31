import { StartFunc as StartFuncToPcsButton } from "../../AddListenersRunTime/ToPcsButton.js";

const StartFunc = ({ inItemSerial, inClonedTemplateRow, inPcs }) => {
    let jVarLocalOrderItemsOrderItemsItemPcsClass = inClonedTemplateRow.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.value = inPcs;
    jVarLocalOrderItemsOrderItemsItemPcsClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsOrderItemsItemPcsClass.addEventListener("click", StartFuncToPcsButton);
};

export { StartFunc };