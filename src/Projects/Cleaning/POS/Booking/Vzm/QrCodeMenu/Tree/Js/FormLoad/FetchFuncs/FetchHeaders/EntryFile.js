import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from "../../../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    
    let jVarLocalBranchName = ApiConfigJson.ForFetch.FileNameOnly

    BodyKeysJson.FilterString = BodyKeysJson.FilterString.replace("{{Branch}}", jVarLocalBranchName);

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }