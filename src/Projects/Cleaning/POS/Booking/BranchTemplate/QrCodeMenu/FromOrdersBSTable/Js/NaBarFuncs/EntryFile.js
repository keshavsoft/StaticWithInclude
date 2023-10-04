import { StartFunc as StartFuncFromOrdersBSTable } from "./ClickFuncs/FromOrdersBSTable/EntryFile.js";
import { StartFunc as StartFuncParentButton } from "./ClickFuncs/ParentButton/EntryFile.js";

const StartFunc = () => {
    StartFuncFromOrdersBSTable();
    StartFuncParentButton();
};
StartFunc();