// import { StartFunc as StartFuncFetchFoamFuncs } from "./FetchFoamFuncs/Entry.js";

import { StartFunc as StartFuncABreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();
    // StartFuncFetchFoamFuncs();
    StartFuncABreadcrumb();
};

export { StartFunc }