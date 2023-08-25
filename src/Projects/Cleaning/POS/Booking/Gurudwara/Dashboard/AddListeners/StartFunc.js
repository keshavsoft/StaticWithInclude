import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";
import { StartFunc as StartFuncStatusId } from "./StatusId/1-ClickAssign.js";
const StartFunc = async () => {
    StartFuncNavBar();
    StartFuncGoButton();
    StartFuncStatusId();
};

export { StartFunc }