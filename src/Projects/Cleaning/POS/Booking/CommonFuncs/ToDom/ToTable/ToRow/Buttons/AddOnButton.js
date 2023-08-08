import { StartFunc as StartFuncToAddOnButton } from "../../AddListenersRunTime/ToAddOnButton.js";

const StartFunc = ({ inItemSerial, inClonedTemplateRow }) => {
    let jVarLocalOrderItemsAddOnButtonClass = inClonedTemplateRow.querySelector(".OrderItemsAddOnButtonClass");
    jVarLocalOrderItemsAddOnButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsAddOnButtonClass.addEventListener("click", StartFuncToAddOnButton);
};




export { StartFunc };