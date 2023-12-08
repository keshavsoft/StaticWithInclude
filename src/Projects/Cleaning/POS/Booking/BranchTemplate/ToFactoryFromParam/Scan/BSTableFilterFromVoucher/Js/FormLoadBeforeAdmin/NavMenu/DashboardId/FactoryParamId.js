let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../../../Dashboard/Dashboard.html", myUrlWithParams.href);
    k1.searchParams.append("BranchName", jVarLocalBranchName);

    window.location.href = k1.href;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

