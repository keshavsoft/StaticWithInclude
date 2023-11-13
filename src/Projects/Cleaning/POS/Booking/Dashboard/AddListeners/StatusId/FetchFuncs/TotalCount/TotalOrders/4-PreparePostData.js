import ApiConfig from "../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Transactions";
    jVarLocalBodyData.FileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.ItemName = "Orders";

    return jVarLocalBodyData;
};

export { StartFunc };