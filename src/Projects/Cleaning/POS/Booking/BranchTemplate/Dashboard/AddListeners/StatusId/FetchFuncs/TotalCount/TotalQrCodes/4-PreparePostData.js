import ApiConfig from "../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";
    jVarLocalBodyData.FilterString = `value.GenerateReference.FileNameOnly === '${ApiConfig.ForFetch.FileNameOnly}'`


    return jVarLocalBodyData;
};

export { StartFunc };