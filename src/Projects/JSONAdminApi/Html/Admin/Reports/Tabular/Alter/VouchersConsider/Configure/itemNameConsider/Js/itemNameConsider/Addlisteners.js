import { StartFunc as StartFuncUpdateWithCheck } from "./UpdateWithCheckButton/1-ClickFunc.js";
import { StartFunc as StartFuncUpdateButton } from "./UpdateButton/1-ClickFunc.js";

let StartFunc = () => {
    StartFuncUpdateButton();
    StartFuncUpdateWithCheck();
};

export { StartFunc };