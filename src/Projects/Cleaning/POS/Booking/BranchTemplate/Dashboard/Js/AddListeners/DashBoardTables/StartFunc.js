import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncTotalCountLinkId } from "./TotalCountBSTableId/EntryFile.js";
import { StartFunc as StartFuncTodayCountLinkId } from "./TodayCountLinkId/EntryFile.js";

let StartFunc = () =>{

    StartFuncRefreshBSTableId();
    StartFuncTotalCountLinkId();
    StartFuncTodayCountLinkId();
    
};

export { StartFunc };