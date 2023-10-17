import { StartFunc as StartFuncCreateFolder } from "./CreateCustomer/StartFunc.js";
import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = () => {
    StartFuncCreateFolder();
    StartFuncRefreshBSTableId();

};

export { StartFunc };