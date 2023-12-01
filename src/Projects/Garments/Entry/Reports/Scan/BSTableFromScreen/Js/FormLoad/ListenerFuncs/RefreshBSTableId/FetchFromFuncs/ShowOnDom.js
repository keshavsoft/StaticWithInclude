import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPurchaseReturnsDetails } from "./Promises/ShowPurchaseReturnsDetails/PostFetch.js";
import { StartFunc as StartFuncSalePosDetails } from "./Promises/SalePosDetails/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c, d] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails(), StartFuncShowPurchaseReturnsDetails(), StartFuncSalePosDetails()]);

    if (a.KTF && b.KTF && c.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalSalesData = b.JsonData;
        let jVarLocalPurchaseReturnsData = c.JsonData;
        let jVarLocalPOSData = d.JsonData;

        let jVarLocalQrCodeData = jFLocalToArray({ inDataToShow: jVarLocalDcData });
        let jVarLocalShowOnDomData = jFLocalCheck({
            QrCodeData: jVarLocalQrCodeData,
            SaleData: jVarLocalSalesData,
            PurchaseReturns: jVarLocalPurchaseReturnsData,
            POSData: jVarLocalPOSData
        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
    };
};

const jFLocalCheck = ({ QrCodeData, SaleData, PurchaseReturns, POSData }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        // element.Status = "In Stock";

        if (element.pk in SaleData) {
            element.SaleStatus = "Sold";
            element.saleDateTime = SaleData[element.pk].DateTime
        };
        if (element.pk in PurchaseReturns) {
            element.purchaseStatus = "yes";
            element.purchaseDateTime = PurchaseReturns[element.pk].DateTime
        };

        if (element.pk in POSData) {
            element.PosDate = POSData[element.pk].Date
        };
        return element;
    });


    return localReturnArray;

};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }