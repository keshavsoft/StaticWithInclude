import ApiConfig from "../../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.inFolderName = "ToFactory";
    jVarLocalBodyData.inFileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.inItemName = "QrCodeDetails";

    return jVarLocalBodyData;
};

export { StartFunc };