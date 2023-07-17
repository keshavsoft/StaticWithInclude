import { StartFunc as StartFuncUpdateButton } from "./UpdateButton/1-ClickFunc.js";
import { StartFunc as StartFuncUpdateWithButton } from "./UpdateWithButton/1-ClickFunc.js";

const StartFunc = () => {
    StartFuncUpdateButton();
    StartFuncUpdateWithButton();
};

export { StartFunc };