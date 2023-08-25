import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = ApiConfigJson.ForFetch.FolderName;
    jVarLocalBodyData.FileNameOnly = ApiConfigJson.ForFetch.FileNameOnly;
    jVarLocalBodyData.ItemName = ApiConfigJson.ForFetch.ItemName;

    return jVarLocalBodyData;
};

export { StartFunc };