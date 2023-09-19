import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
// import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";

let StartFunc = () => {
    StartFuncAddOn();
    // StartFuncOnChange();
    StartFuncMainScreen();
};

export { StartFunc };