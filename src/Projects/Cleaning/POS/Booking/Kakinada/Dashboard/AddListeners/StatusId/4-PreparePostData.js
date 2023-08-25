import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";

    return jVarLocalBodyData;
};

export { StartFunc };