import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "ToFactory";
    jVarLocalBodyData.FileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.ItemName = "QrCodeDetails";

    return jVarLocalBodyData;
};

export { StartFunc };