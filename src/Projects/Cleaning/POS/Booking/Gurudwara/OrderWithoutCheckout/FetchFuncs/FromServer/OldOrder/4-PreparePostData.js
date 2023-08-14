import ApiConfigJson from "../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inPk }) => {
    let jVarLocalBody = {
        FolderName: ApiConfigJson.ForFetch.FolderName,
        FileNameOnly: ApiConfigJson.ForFetch.FileNameOnly,
        ItemName: ApiConfigJson.ForFetch.ItemName,
        JsonPk: inPk
    };

    return jVarLocalBody;
};

export { StartFunc };