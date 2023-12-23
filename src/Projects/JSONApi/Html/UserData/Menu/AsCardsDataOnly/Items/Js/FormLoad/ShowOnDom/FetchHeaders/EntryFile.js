import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    let jVarLocalFileNameWithExtension = getUrlQueryParams({ inGetKey: "FileName" });
    let jVarLocalFileName = jVarLocalFileNameWithExtension.split(".").shift();
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.inFolderName = jVarLocalFolderName;
    jVarLocalBodyKeys.inFileNameOnly = jVarLocalFileName;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }