import { StartFunc as StartFuncFromFetch } from "../../../FetchFuncs/FromServer/OldOrder/2-ButtonClickFunc.js";

import { StartFunc as StartFuncAddToDom } from "../../AddToDom.js";
import { StartFunc as StartFuncShowOnDom } from "../../../ShowOnDom/StartFunc.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncToLocalStorageAddOn } from "../../../../../ToLocalStorage/AddOnData/Bulk.js";

import ApiConfigJson from "../../../../ApiConfig.json" assert { type: "json" };

let StartFunc = async () => {
    let jVarLocalRowPk = getUrlQueryParams({ inGetKey: "OrderNumber" });

    await StartFuncFromFetch({ inPk: jVarLocalRowPk });

    jFLocalFromOrdersDataToItemsInOrder();
    jFLocalAddAddOnData();

    StartFuncAddToDom();
    StartFuncShowOnDom({ inPk: jVarLocalRowPk });

};

let jFLocalFromOrdersDataToItemsInOrder = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({
        inPk: jFLocalOrderNumber,
        inBranchName: ApiConfigJson.BranchName
    });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorage({ inData: jVarLocalFromLocalStorage.JsonData.ItemsInOrder });
};

let jFLocalAddAddOnData = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({ inPk: jFLocalOrderNumber });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorageAddOn({ inData: jVarLocalFromLocalStorage.JsonData.AddOnData });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }