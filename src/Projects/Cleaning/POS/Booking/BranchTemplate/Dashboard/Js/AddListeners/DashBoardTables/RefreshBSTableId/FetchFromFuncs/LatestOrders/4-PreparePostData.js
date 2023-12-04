import ApiConfigJson from "./FetchKeys.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = { ...ApiConfigJson };
    jVarLocalBodyData.FileNameOnly = getUrlQueryParams({ inGetKey: "BranchName" });

    // jVarLocalBodyData.FolderName = "Transactions";
    // jVarLocalBodyData.FileNameOnly = ApiConfigJson.ForFetch.FileNameOnly;
    // jVarLocalBodyData.ItemName = "Orders";

    return jVarLocalBodyData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };