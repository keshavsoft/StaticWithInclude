import ApiConfigJson from "./FetchKeys.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalFileName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalBodyData = { ...ApiConfigJson };

    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";
    jVarLocalBodyData.MapString = "GenerateReference.ReferncePk";
    jVarLocalBodyData.FilterString = `value.GenerateReference.FileNameOnly === '${jVarLocalFileName}'`;
    
    return jVarLocalBodyData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };