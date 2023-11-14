// import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Factory";
    // jVarLocalBodyData.FileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.FileNameOnly = "QrCodeDetails";
    jVarLocalBodyData.ItemName = "QrCodeDetails";
    jVarLocalBodyData.FilterString = "(new Date(value.DateTime)).toLocaleDateString() === `${(new Date()).toLocaleDateString()}`";

    return jVarLocalBodyData;
};

export { StartFunc };