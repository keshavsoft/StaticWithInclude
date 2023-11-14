// import { StartFunc as StartFuncNewCustomers } from "./FetchFuncs/NewCustomers/EntryFile.js";
// import { StartFunc as StartFuncFrequentCustomers } from "./FetchFuncs/FrequentCustomers/EntryFile.js";
// import { StartFunc as StartFuncTodayCustomers } from "./FetchFuncs/TodayCustomers/EntryFile.js";

let StartFunc = () => {
    // StartFuncNewCustomers();
    // StartFuncFrequentCustomers().then();
    // StartFuncTodayCustomers();


    // let jVarLocalHtmlId = 'RefreshBSTableId';
    // let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    // jVarLocalRefreshBSTableId.click();

    let jVarLocalHtmlId3 = 'BranchAndQrCodesRefreshBSTableId';
    let jVarLocalLatestQrCodesRefreshBSTableId = document.getElementById(jVarLocalHtmlId3);
    jVarLocalLatestQrCodesRefreshBSTableId.click();

    let jVarLocalHtmlId4 = 'DcRefreshBSTableId';
    let jVarLocalLatestDCRefreshTableId = document.getElementById(jVarLocalHtmlId4);
    jVarLocalLatestDCRefreshTableId.click();

    // let jVarLocalHtmlId1 = 'TotalCountLinkId';
    // let jVarLocalTotalCountLinkId = document.getElementById(jVarLocalHtmlId1);
    // jVarLocalTotalCountLinkId.click();

    // let jVarLocalHtmlId2 = 'TodayCountLinkId';
    // let jVarLocalTodayCountLinkId = document.getElementById(jVarLocalHtmlId2);
    // jVarLocalTodayCountLinkId.click();


};

export { StartFunc };