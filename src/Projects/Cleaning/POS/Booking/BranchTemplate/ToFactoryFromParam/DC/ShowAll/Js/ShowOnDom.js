import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;

        let jVarLocalData = jFLocalItemsData({
            inDcData: jVarLocalDcData,
            inItemsData: jVarLocalItemsData,

        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalData });
    };
};

let jFLocalItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = Object.values(jVarLocalDcData);

    let jVarLocalReturnArray = localArrayObj.map((element) => {
        // if (element.pk in inItemsData) {
        //     element.ItemDetails = inItemsData[element.pk];
        // } else {
        //     element.ItemDetails = 0;
        // };

        element.ItemDetails = element.pk in jVarLocalItemsData ? jVarLocalItemsData[element.pk] : 0;

        return element;
    });

    // localItemsData.forEach((element) => {
    //     localArrayObj.map((ele) => {
    //         if (ele.pk == element[0]) {
    //             ele.ItemDetails = element[1]
    //         }
    //     });
    // });

    return jVarLocalReturnArray;
};

export { StartFunc }