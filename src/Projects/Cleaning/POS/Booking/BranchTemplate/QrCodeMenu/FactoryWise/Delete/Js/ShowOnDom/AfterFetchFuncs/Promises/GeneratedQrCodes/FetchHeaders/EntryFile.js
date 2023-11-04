import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from "./BodyKeys.json" assert {type: 'json'};
// import ProjectKeys from "../../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBranchName = "Kakinada";

    BodyKeysJson.FilterString = BodyKeysJson.FilterString.replace("{{Branch}}", jVarLocalBranchName);

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }