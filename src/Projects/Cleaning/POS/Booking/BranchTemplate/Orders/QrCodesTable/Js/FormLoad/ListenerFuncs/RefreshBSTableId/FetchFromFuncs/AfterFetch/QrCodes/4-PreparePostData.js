// import ApiConfigJson from "../../../../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalFileName = jVarLocalBranchName;

    let jVarLocalBodyData = {};

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