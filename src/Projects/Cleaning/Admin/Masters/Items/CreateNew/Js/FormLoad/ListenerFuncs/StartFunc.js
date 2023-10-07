import { StartFunc as StartFuncCreateFolder } from "./CreateFolder/StartFunc.js";
import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncCreateFolder({ inProjectName });
    StartFuncRefreshBSTableId();
};

export { StartFunc };