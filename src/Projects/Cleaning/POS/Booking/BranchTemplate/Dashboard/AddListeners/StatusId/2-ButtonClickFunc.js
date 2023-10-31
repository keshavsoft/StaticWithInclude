import { StartFunc as StartFuncNewCustomers } from "./FetchFuncs/NewCustomers/EntryFile.js";
import { StartFunc as StartFuncFrequentCustomers } from "./FetchFuncs/FrequentCustomers/EntryFile.js";
import { StartFunc as StartFuncTodayCustomers } from "./FetchFuncs/TodayCustomers/EntryFile.js";
// import { StartFunc as StartFuncLatestOrders } from "./FetchFuncs/LatestOrders/EntryFile.js";
// import { StartFunc as StartFuncQrCodes } from "./FetchFuncs/QrCodes/EntryFile.js";
// import { StartFunc as StartFuncLatestOrdersAfterFetch } from "./FetchFuncs/LatestOrders/6-AfterFetch.js";
// import { StartFunc as StartFuncLatestQrCodes } from "./FetchFuncs/LatestQrCodes/EntryFile.js";
// import { StartFunc as StartFuncTotalCount } from "./FetchFuncs/TotalCount/EntryFile.js";
// import { StartFunc as StartFuncTodayCount } from "./FetchFuncs/TodayCount/EntryFile.js";

let StartFunc = () => {
    StartFuncNewCustomers();
    StartFuncFrequentCustomers().then();
    StartFuncTodayCustomers();
    // StartFuncLatestQrCodes();
    // StartFuncTotalCount();
    // StartFuncTodayCount();
    // StartFuncLatestOrders().then(OrdersData => {
    //     StartFuncQrCodes().then(QrCodesData => {
    //         StartFuncLatestOrdersAfterFetch({ inFromFetch: OrdersData, inQrCodeData: QrCodesData });
    //     });
    // });
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

    let jVarLocalHtmlId3 = 'LatestQrCodesRefreshBSTableId';
    let jVarLocalLatestQrCodesRefreshBSTableId = document.getElementById(jVarLocalHtmlId3);
    jVarLocalLatestQrCodesRefreshBSTableId.click();

    let jVarLocalHtmlId4 = 'LatestDCRefreshTableId';
    let jVarLocalLatestDCRefreshTableId = document.getElementById(jVarLocalHtmlId4);
    jVarLocalLatestDCRefreshTableId.click();

    let jVarLocalHtmlId1 = 'TotalCountLinkId';
    let jVarLocalTotalCountLinkId = document.getElementById(jVarLocalHtmlId1);
    jVarLocalTotalCountLinkId.click();

    let jVarLocalHtmlId2 = 'TodayCountLinkId';
    let jVarLocalTodayCountLinkId = document.getElementById(jVarLocalHtmlId2);
    jVarLocalTodayCountLinkId.click();


};

export { StartFunc };