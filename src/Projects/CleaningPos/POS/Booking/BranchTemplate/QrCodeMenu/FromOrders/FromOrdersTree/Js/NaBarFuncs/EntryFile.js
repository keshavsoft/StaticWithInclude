import { StartFunc as StartFuncFromOrdersBSTable } from "./ClickFuncs/FromOrdersBSTable/EntryFile.js";
import { StartFunc as StartFuncFromOrdersTree } from "./ClickFuncs/FromOrdersTreeId/EntryFile.js";

const StartFunc = () => {
    StartFuncFromOrdersBSTable();
    StartFuncFromOrdersTree();
};
StartFunc();