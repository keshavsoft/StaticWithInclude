import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Factory";
    jVarLocalBodyData.FileNameOnly = "QrCodeDetails";
    jVarLocalBodyData.ItemName = "QrCodeDetails";
    jVarLocalBodyData.FilterString = `value.BranchName === '${ApiConfig.ForFetch.FileNameOnly}'`

    return jVarLocalBodyData;
};

export { StartFunc };