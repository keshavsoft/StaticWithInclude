import { StartFunc as StartFuncShowOnDom } from "../../ShowOnDom/StartFunc.js";

let StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    StartFuncShowOnDom({ inPk: jFLocalOrderNumber });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }