import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";
import { StartFunc as StartFuncDashboardId } from "./DashBoardId/1-StartFunc.js";

const StartFunc = async () => {
    StartFuncNavBar();
    StartFuncGoButton();
    StartFuncDashboardId();
};

export { StartFunc }