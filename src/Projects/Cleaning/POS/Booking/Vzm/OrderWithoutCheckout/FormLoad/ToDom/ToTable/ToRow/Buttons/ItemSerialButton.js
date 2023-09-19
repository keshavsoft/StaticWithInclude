import { StartFunc as StartFuncToItemSerialButton } from "../../AddListenersRunTime/ToItemSerialButton.js";

const StartFunc = ({ inItemSerial, inClonedTemplateRow }) => {
    let jVarLocalOrderItemsSerialButtonClass = inClonedTemplateRow.querySelector(".OrderItemsSerialButtonClass");
    jVarLocalOrderItemsSerialButtonClass.value = inItemSerial;
    jVarLocalOrderItemsSerialButtonClass.addEventListener("click", StartFuncToItemSerialButton);
};

export { StartFunc };