import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = BodyKeysJson;
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "OrderNumber" });

    // jVarLocalBodyKeysJson.FilterString=`value.GenerateReference.ReferncePk === '${jVarLocalReferncePk}'`;
    jVarLocalBodyKeysJson.FilterString = jVarLocalBodyKeysJson.FilterString.replace("{{OrderNumber}}",jVarLocalReferncePk);

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