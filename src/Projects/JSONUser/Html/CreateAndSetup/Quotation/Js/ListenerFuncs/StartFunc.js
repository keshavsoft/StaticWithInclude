// import { StartFunc as StartFuncSaveButton } from "./SaveButton/ButtonClicks.js";
import { StartFunc as StartFuncClickFunc } from "./SaveWithButton/1-ClickFunc.js";

let StartFunc = ({ inSubRoute }) => {
    // StartFuncSaveButton({ inSubRoute });
    StartFuncClickFunc({inSubRoute})
};

export { StartFunc };
