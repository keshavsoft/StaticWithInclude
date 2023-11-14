// import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {

    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Factory";
    // jVarLocalBodyData.FileNameOnly = `${ApiConfigJson.ForFetch.FileNameOnly}`;
    jVarLocalBodyData.FileNameOnly = `VoucherDetails`;
    jVarLocalBodyData.ItemName = "VoucherDetails";
    jVarLocalBodyData.ScreenName = "Create";

    return jVarLocalBodyData;
};

export { StartFunc };