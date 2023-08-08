import ConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBody = {
        inFolderName: "Transactions",
        inFileNameOnly: ConfigJson.JsonFileName,
        inItemName: "Orders"
    };

    return jVarLocalBody;
};

export { StartFunc };