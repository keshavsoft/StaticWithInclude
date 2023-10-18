import { StartFunc as StartFuncLatestOrders } from "./FetchFromFuncs/LatestOrders/EntryFile.js";
import { StartFunc as StartFuncQrCodes } from "./FetchFromFuncs/QrCodes/EntryFile.js";
import { StartFunc as StartFuncLatestOrdersAfterFetch } from "./FetchFromFuncs/LatestOrders/6-AfterFetch.js";

let StartFunc = () => {
    StartFuncLatestOrders().then(OrdersData => {
        StartFuncQrCodes().then(QrCodesData => {
            StartFuncLatestOrdersAfterFetch({ inFromFetch: OrdersData, inQrCodeData: QrCodesData });
        });
    });
};

export { StartFunc };
