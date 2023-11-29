import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPurchaseReturnsDetails } from "./Promises/ShowPurchaseReturnsDetails/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails(), StartFuncShowPurchaseReturnsDetails()]);

    if (a.KTF && b.KTF && c.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalSalesData = b.JsonData;
        let jVarLocalPurchaseReturnsData = c.JsonData;

        let jVarLocalQrCodeData = jFLocalToArray({ inDataToShow: jVarLocalDcData });
        let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalQrCodeData, SaleData: jVarLocalSalesData, PurchaseReturns: jVarLocalPurchaseReturnsData })

        StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
    };
};

const jFLocalCheck = ({ QrCodeData, SaleData, PurchaseReturns }) => {
    console.log("PurchaseReturns:",PurchaseReturns);

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        element.Status = "In Stock";

        if (element.pk in SaleData) {
            element.Status = "Sold";
            element.saleDateTime = SaleData[element.pk].DateTime
        };
        if (element.pk in PurchaseReturns) {
            element.Status = "Sold";
            element.purchaseDateTime = PurchaseReturns[element.pk].DateTime
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