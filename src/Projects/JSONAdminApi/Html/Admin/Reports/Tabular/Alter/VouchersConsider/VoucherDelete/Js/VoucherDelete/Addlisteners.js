import { StartFunc as StartFuncDeleteButton } from "./DeleteButton/1-ClickFunc.js";
import { StartFunc as StartFuncDeleteWithCheckButton } from "./DeleteWithCheckButton/1-ClickFunc.js";

const StartFunc = () => {
    StartFuncDeleteButton();
    StartFuncDeleteWithCheckButton();
};

export { StartFunc };