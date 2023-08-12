import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";

let StartFunc = () => {
    StartFuncItemSelect();
    StartFuncCategoryRadio();
};

export { StartFunc };