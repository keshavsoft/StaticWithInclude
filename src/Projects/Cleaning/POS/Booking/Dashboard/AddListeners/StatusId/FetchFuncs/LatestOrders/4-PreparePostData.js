import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Transactions";
    jVarLocalBodyData.FileNameOnly = ApiConfigJson.ForFetch.FileNameOnly;
    jVarLocalBodyData.ItemName = "Orders";

    return jVarLocalBodyData;
};

export { StartFunc };