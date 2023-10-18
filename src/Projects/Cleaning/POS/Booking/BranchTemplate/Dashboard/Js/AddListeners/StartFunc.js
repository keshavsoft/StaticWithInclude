// import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
// import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";
// import { StartFunc as StartFuncStatusId } from "./StatusId/1-ClickAssign.js";
import { StartFunc as StartFuncDashboardTables } from "./DashBoardTables/StartFunc.js";

const StartFunc = () => {

    StartFuncDashboardTables();
    // StartFuncNavBar();
    // StartFuncGoButton();
    // StartFuncStatusId();
};

export { StartFunc }