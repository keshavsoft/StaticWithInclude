// import ApiConfig from "../../../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "Transactions";
    // jVarLocalBodyData.FileNameOnly = ApiConfig.ForFetch.FileNameOnly;
    jVarLocalBodyData.FileNameOnly = "Kakinada";
    jVarLocalBodyData.ItemName = "Orders";
    jVarLocalBodyData.FilterString = "(new Date(value.OrderData.Currentdateandtime)).toLocaleDateString() === `${(new Date()).toLocaleDateString()}`";

    return jVarLocalBodyData;
};

export { StartFunc };