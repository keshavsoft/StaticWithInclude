import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "ToFactory";
    jVarLocalBodyData.FileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.ItemName = "VoucherDetails";
    jVarLocalBodyData.FilterString = "(new Date(value.DateTime)).toLocaleDateString() === `${(new Date()).toLocaleDateString()}`";

    return jVarLocalBodyData;
};

export { StartFunc };