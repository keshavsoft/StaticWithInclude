import { StartFunc as StartFuncLoadData } from "./LoadData/StartFunc.js";
import { StartFunc as StartFuncToLocalStorageButton } from "./ToLocalStorageButton/1-ClickAssign.js";

const StartFunc = () => {
    StartFuncLoadData();
    StartFuncToLocalStorageButton();
};

export { StartFunc }