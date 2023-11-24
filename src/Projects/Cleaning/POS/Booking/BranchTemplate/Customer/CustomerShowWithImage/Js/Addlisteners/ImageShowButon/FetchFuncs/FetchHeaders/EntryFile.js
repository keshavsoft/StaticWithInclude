import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalRowPk = getUrlQueryParams({ inGetKey: "Rowpk" });

    let jVarLocalBodyKeys = {};

    BodyKeysJson.inRowPk = jVarLocalRowPk
    jVarLocalBodyKeys = BodyKeysJson;

    jVarLocalBodyKeys = BodyKeysJson;

    // let jVarLocalFileValue = BodyKeysJson.inFileNameOnly;

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;

    jVarLocalBodyKeysJson.inFileNameOnly = "CRM";

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