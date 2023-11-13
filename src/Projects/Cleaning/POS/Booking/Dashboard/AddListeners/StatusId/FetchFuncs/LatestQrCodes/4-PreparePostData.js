import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBranch = ApiConfigJson.ForFetch.FileNameOnly;

    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";
    jVarLocalBodyData.FilterString = `value.GenerateReference.FileNameOnly === '${jVarLocalBranch}'`;

    return jVarLocalBodyData;
};

export { StartFunc };