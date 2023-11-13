import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from "../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalUrlSplit = window.location.pathname.split("/");
    let jVarLocalFactoryName = jVarLocalUrlSplit[4];

    BodyKeysJson.FilterString = BodyKeysJson.FilterString.replace("{{BranchName}}", jVarLocalFactoryName);
    KeysJson.body = JSON.stringify(BodyKeysJson);


    return KeysJson;
};

export { StartFunc }