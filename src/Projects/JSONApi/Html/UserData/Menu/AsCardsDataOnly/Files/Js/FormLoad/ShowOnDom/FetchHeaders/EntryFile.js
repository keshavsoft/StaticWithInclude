import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    
    KeysJson.body = JSON.stringify({ inFolderName: jVarLocalFolderName });

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }