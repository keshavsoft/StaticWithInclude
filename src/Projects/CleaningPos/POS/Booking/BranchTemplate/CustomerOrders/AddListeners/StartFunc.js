import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
import { StartFunc as StartFuncGoButton } from "./GoButton/1-StartFunc.js";
// import { StartFunc as StartFuncStatusId } from "./StatusId/1-ClickAssign.js";

const StartFunc = () => {
    StartFuncNavBar();
    StartFuncGoButton();
    // StartFuncStatusId();
};

export { StartFunc }