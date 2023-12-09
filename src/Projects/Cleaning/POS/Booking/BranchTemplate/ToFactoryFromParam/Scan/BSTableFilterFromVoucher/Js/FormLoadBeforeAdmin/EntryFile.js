import { StartFunc as StartFuncNavMenu } from "./NavMenu/Entry.js";
import { StartFunc as StartFuncBreadCumMenu } from "./BreadCumMenu/Entry.js";

const StartFunc = () => {
    StartFuncNavMenu();
    StartFuncBreadCumMenu();
};

export { StartFunc };