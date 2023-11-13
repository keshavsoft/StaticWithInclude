// import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncTotalCountLinkId } from "./TotalCountBSTableId/EntryFile.js";
// import { StartFunc as StartFuncTodayCountLinkId } from "./TodayCountLinkId/EntryFile.js";
import { StartFunc as StartFuncLatestQrCodesRefreshTable } from "./LatestQrCodesRefreshTable/EntryFile.js";
import { StartFunc as StartFuncLatestDCRefreshTableId } from "./LatestDCRefreshTableId/EntryFile.js";

let StartFunc = () =>{

    // StartFuncRefreshBSTableId();
    StartFuncTotalCountLinkId();
    // StartFuncTodayCountLinkId();
    StartFuncLatestQrCodesRefreshTable();
    StartFuncLatestDCRefreshTableId();
    
};

export { StartFunc };