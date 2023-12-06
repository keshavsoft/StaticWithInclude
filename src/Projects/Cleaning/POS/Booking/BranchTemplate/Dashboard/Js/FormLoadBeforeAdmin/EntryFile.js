import { StartFunc as StartFuncFromUrlParams } from "../FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncNavMenu } from "./NavMenu/Entry.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncNavMenu();
};

export { StartFunc };