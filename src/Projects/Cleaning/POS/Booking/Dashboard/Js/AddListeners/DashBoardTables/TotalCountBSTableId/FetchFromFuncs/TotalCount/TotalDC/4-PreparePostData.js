// import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Factory";
    jVarLocalBodyData.FileNameOnly = "VoucherDetails";
    jVarLocalBodyData.ItemName = "VoucherDetails";
    // jVarLocalBodyData.FilterString = `value.BranchName === '${ApiConfig.ForFetch.FileNameOnly}'`
    jVarLocalBodyData.FilterString = `value.BranchName === 'Kakinada'`

    return jVarLocalBodyData;
};

export { StartFunc };