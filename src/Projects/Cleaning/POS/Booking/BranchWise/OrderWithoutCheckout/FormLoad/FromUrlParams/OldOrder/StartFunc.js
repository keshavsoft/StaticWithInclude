import { StartFunc as StartFuncFromFetch } from "../../../FetchFuncs/FromServer/OldOrder/2-ButtonClickFunc.js";
import { StartFunc as StartFuncAddToDom } from "../../AddToDom.js";
import { StartFunc as StartFuncShowOnDom } from "../../../ShowOnDom/StartFunc.js";
// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPk.js";

// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncToLocalStorage } from "../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";

let StartFunc = () => {
    let jVarLocalRowPk = getUrlQueryParams({ inGetKey: "OrderNumber" });

    StartFuncFromFetch({ inPk: jVarLocalRowPk });

    jFLocalFromOrdersDataToItemsInOrder();

    StartFuncAddToDom();
    StartFuncShowOnDom({ inPk: jVarLocalRowPk });
};

let jFLocalFromOrdersDataToItemsInOrder = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({ inPk: jFLocalOrderNumber });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorage({ inData: jVarLocalFromLocalStorage.JsonData.ItemsInOrder });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }