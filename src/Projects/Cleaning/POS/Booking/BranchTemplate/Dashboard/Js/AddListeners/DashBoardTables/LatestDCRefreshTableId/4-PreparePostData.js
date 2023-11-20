import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBranch = ApiConfigJson.ForFetch.FileNameOnly;

    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Factory";
    jVarLocalBodyData.FileNameOnly = `VoucherDetails`;
    jVarLocalBodyData.ItemName = "VoucherDetails";
    jVarLocalBodyData.FilterString = `value.BranchName === '${jVarLocalBranch}'`;

    jVarLocalBodyData.ScreenName = "Create";

    return jVarLocalBodyData;
};

export { StartFunc };