import { StartFunc as StartFuncUpdateButton } from "./UpdateButton/1-ClickFunc.js";
import { StartFunc as StartFuncUpdateWithCheckButton } from "./UpdateWithCheckButton/1-ClickFunc.js";

const StartFunc = () => {
    StartFuncUpdateButton();
    StartFuncUpdateWithCheckButton();
};

export { StartFunc };