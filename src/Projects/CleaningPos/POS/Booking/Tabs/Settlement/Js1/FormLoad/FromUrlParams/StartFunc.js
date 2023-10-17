import { StartFunc as StartFuncShowOnDom } from "../../ShowOnDom/StartFunc.js";

let StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    jFLocalOrderNumberId({ inOrderNumberId: jFLocalOrderNumber });
    
    StartFuncShowOnDom({ inPk: jFLocalOrderNumber });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

export { StartFunc }