import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {

    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "ToFactory";
    jVarLocalBodyData.FileNameOnly = `${ApiConfigJson.ForFetch.FileNameOnly}`;
    jVarLocalBodyData.ItemName = "VoucherDetails";
    jVarLocalBodyData.ScreenName = "Create";

    return jVarLocalBodyData;
};

export { StartFunc };