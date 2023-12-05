import ApiConfigJson from "../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })

    let jVarLocalBody = {
        FolderName: ApiConfigJson.ForFetch.FolderName,
        // FileNameOnly: ApiConfigJson.ForFetch.FileNameOnly,
        FileNameOnly: jVarLocalBranchName,
        ItemName: ApiConfigJson.ForFetch.ItemName,
        JsonPk: inPk
    };

    return jVarLocalBody;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };