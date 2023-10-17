// import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";
import { StartFunc as StartFuncForLastOrder } from "../FetchFuncs/ForLastOrder/EntryFile.js";
import { StartFunc as StartFuncToSelectFromLocalStorage } from "./ToSelectFromLocalStorage.js";

let StartFunc = () => {
    StartFuncForLastOrder().then();

    StartFuncItemSelect();

    // StartFuncCategoryRadio();

    StartFuncToSelectFromLocalStorage();
};

export { StartFunc };