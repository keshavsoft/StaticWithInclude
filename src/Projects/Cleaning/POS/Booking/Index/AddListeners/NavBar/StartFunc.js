import { StartFunc as StartFuncLoadData } from "./LoadData/StartFunc.js";
import { StartFunc as StartFuncToLocalStorageButton } from "./ToLocalStorageButton/StartFunc.js";

const StartFunc = () => {
    StartFuncLoadData();
    StartFuncToLocalStorageButton();
};

export { StartFunc }