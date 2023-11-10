import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncSentItemDetails } from "./Promises/ShowSentItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails(), StartFuncSentItemDetails()]);

    if (a.KTF && b.KTF && c.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;
        let jVarLocalSentItemsData = c.JsonData;

        let jVarLocalData = jFLocalItemsData({
            inDcData: jVarLocalDcData,
            inItemsData: jVarLocalItemsData,

        });

         let jVarLocalSentItemData = jFLocalSentItemsData({
            inDcData: jVarLocalData,
            inItemsData: jVarLocalSentItemsData,

        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalSentItemData });
    };
};

let jFLocalItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = Object.values(jVarLocalDcData);

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        element.ItemDetails = element.pk in jVarLocalItemsData ? jVarLocalItemsData[element.pk] : 0;

        return element;
    });

    return jVarLocalReturnArray;
};

let jFLocalSentItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = Object.values(jVarLocalDcData);

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        element.SentItemsDetails = element.pk in jVarLocalItemsData ? jVarLocalItemsData[element.pk] : 0;

        return element;
    });

    return jVarLocalReturnArray;
};

export { StartFunc }