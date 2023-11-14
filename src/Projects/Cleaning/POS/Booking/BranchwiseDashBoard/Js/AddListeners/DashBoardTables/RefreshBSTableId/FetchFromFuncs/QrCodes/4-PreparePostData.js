// import ApiConfigJson from "../../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {

    // let jVarLocalFileName = ApiConfigJson.ForFetch.FileNameOnly

    let jVarLocalBodyData = {};

    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";
    jVarLocalBodyData.MapString = "GenerateReference.ReferncePk";
    // jVarLocalBodyData.FilterString = `value.GenerateReference.FileNameOnly === '${jVarLocalFileName}'`;
    jVarLocalBodyData.FilterString = `value.GenerateReference.FileNameOnly === 'Kakinada'`;
    
    return jVarLocalBodyData;
};

export { StartFunc };