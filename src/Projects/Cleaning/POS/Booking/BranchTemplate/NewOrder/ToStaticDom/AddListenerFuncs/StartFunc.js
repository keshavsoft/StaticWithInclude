import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";
import { StartFunc as StartFuncForLastOrder } from "../FetchFuncs/ForLastOrder/EntryFile.js";

let StartFunc = () => {
    StartFuncForLastOrder().then();
    StartFuncItemSelect();
    StartFuncCategoryRadio();
};

export { StartFunc };