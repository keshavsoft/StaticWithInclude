import { StartFunc as StartFuncNewCustomers } from "./FetchFuncs/NewCustomers/EntryFile.js";
import { StartFunc as StartFuncFrequentCustomers } from "./FetchFuncs/FrequentCustomers/EntryFile.js";
import { StartFunc as StartFuncTodayCustomers } from "./FetchFuncs/TodayCustomers/EntryFile.js";
import { StartFunc as StartFuncLatestOrders } from "./FetchFuncs/LatestOrders/EntryFile.js";
import { StartFunc as StartFuncQrCodes } from "./FetchFuncs/QrCodes/EntryFile.js";
import { StartFunc as StartFuncLatestOrdersAfterFetch } from "./FetchFuncs/LatestOrders/6-AfterFetch.js";
import { StartFunc as StartFuncLatestQrCodes } from "./FetchFuncs/LatestQrCodes/EntryFile.js";

let StartFunc = () => {
    StartFuncNewCustomers();
    StartFuncFrequentCustomers().then();
    StartFuncTodayCustomers();
    StartFuncLatestQrCodes();
    StartFuncLatestOrders().then(OrdersData =>{
        StartFuncQrCodes().then(QrCodesData =>{
            StartFuncLatestOrdersAfterFetch({inFromFetch: OrdersData, inQrCodeData: QrCodesData});
        });
    });
};

export { StartFunc };