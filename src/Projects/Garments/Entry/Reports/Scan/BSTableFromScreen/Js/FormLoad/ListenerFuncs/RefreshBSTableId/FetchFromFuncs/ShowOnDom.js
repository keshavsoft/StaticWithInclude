import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalSalesData = b.JsonData;

        let jVarLocalQrCodeData = jFLocalToArray({ inDataToShow: jVarLocalDcData });
        let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalQrCodeData, SaleData: jVarLocalSalesData })

        StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
    };
};

const jFLocalCheck = ({ QrCodeData, SaleData }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        element.Status = "In Stock";

        if (element.pk in SaleData) {
            element.Status = "Sold";
            element.scanDateTime = SaleData[element.pk].DateTime
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