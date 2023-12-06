import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inProjectName = jVarLocalBodyData.inProjectName;
    let inFileNameOnly = getUrlQueryParams({ inGetKey: "BranchName" });
    let inRowPk = jVarLocalBodyData.inRowPk;
    let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/PostQrCodes/Cleaning/${inFileNameOnly}/${inRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
