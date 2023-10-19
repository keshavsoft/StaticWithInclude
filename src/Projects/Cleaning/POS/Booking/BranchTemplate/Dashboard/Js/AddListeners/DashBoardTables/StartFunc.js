import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncTotalCountLinkId } from "./TotalCountBSTableId/EntryFile.js";

let StartFunc = () =>{

    StartFuncRefreshBSTableId();
    StartFuncTotalCountLinkId();
    
};

export { StartFunc };