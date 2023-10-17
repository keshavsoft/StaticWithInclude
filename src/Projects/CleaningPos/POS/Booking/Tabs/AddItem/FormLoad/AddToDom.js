import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncFactoriesToSelect } from "../FormLoad/FillSelect/FactoriesToSelect.js";

let StartFunc = () => {
    StartFuncWashTypeFill();
    StartFuncItemsToSelect();
    StartFuncFactoriesToSelect();

    StartFuncToDomToOrderItems();
};

export { StartFunc }