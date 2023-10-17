import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";
import { StartFunc as StartFuncStatusId } from "./StatusId/1-ClickAssign.js";
import { StartFunc as StartFuncNavSearchId } from "./NavSearchId/StartFunc.js";

const StartFunc = () => {
    StartFuncNavBar();
    StartFuncGoButton();
    StartFuncStatusId();
    StartFuncNavSearchId();
};

export { StartFunc }