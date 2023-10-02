import { StartFunc as StartFuncMenuId } from "./ClickFuncs/MenuId/EntryFile.js";
import { StartFunc as StartFuncVerticalFromParamsId } from "./ClickFuncs/VerticalFromParamsId/EntryFile.js";
import { StartFunc as StartFuncBsFromData } from "./ClickFuncs/BsFromData/EntryFile.js";
import { StartFunc as StartFuncBSFiltersTableFromScreen } from "./ClickFuncs/BsFiltersFromScreen/EntryFile.js";

const StartFunc = () => {
    StartFuncMenuId();
    StartFuncVerticalFromParamsId();
    StartFuncBsFromData();
    StartFuncBSFiltersTableFromScreen();
};
StartFunc();