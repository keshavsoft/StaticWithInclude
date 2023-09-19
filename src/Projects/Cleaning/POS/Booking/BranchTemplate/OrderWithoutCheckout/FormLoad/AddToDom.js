import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
// import { StartFunc as StartFuncToDomToOrderItems } from "../../CommonFuncs/ToDom/ToTable/ToOrderItems.js";

// import { StartFunc as StartFuncToDomToOrderItems } from "../../../CommonFuncs/ToDom/ToTable/ToOrderItems.js";

import { StartFunc as StartFuncToDomToOrderItems } from "./ToDom/ToTable/ToOrderItems.js";


let StartFunc = () => {

    StartFuncItemsToSelect();

    jFLocalOrderNumberId();

    StartFuncToDomToOrderItems();
};

let jFLocalOrderNumberId = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = jFLocalOrderNumber;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }