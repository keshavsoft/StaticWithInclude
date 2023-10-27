import { StartFunc as StartFuncLatestOrders } from "./FetchFromFuncs/LatestOrders/EntryFile.js";
import { StartFunc as StartFuncQrCodes } from "./FetchFromFuncs/QrCodes/EntryFile.js";
import { StartFunc as StartFuncLatestOrdersAfterFetch } from "./FetchFromFuncs/LatestOrders/6-AfterFetch.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/LastOrdersData.js";

let StartFunc = () => {
    StartFuncLatestOrders().then(OrdersData => {

        StartFuncToLocalStorage({ inOrdersData: OrdersData });

        StartFuncQrCodes().then(QrCodesData => {
            if (OrdersData.KTF && QrCodesData.KTF) {
                StartFuncLatestOrdersAfterFetch({
                    inFromFetch: OrdersData.JsonData,
                    inQrCodeData: QrCodesData.JsonData
                });
            };
        });
    });
};

export { StartFunc };
