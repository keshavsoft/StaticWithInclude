import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncBranchName } from "../ToDom/BranchName.js";

let StartFunc = () => {
    // StartFuncBranchName();
    StartFuncItemsToSelect();

    StartFuncToDomToOrderItems();
};

export { StartFunc };