const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Transactions";

    jVarLocalBodyData.FileNameOnly = getUrlQueryParams({ inGetKey: "BranchName" });
    jVarLocalBodyData.ItemName = "Orders";

    return jVarLocalBodyData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };