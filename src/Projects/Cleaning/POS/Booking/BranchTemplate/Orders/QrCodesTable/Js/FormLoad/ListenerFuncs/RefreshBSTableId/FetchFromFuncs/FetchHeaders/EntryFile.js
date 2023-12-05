import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = BodyKeysJson;

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;

    jVarLocalBodyKeysJson.inFileNameOnly = jVarLocalBranchName;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }