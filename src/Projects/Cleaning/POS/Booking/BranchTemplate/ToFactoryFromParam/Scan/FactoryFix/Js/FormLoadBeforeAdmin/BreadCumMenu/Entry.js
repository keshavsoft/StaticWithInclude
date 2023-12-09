import { StartFunc as StartFuncBSTableURL } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncDCShow } from "./DCShow/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncDashboardId();
    StartFuncDCShow();
};

export { StartFunc };