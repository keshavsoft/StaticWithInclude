import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
// import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../../CommonFuncs/ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncFactoriesToSelect } from "../FormLoad/FillSelect/FactoriesToSelect.js";

let StartFunc = ({ inPk }) => {
    StartFuncWashTypeFill();
    StartFuncItemsToSelect();
    StartFuncFactoriesToSelect();

    jFLocalOrderNumberId({ inOrderNumberId: inPk });

    StartFuncToDomToOrderItems();
};

let jFLocalOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};


export { StartFunc }