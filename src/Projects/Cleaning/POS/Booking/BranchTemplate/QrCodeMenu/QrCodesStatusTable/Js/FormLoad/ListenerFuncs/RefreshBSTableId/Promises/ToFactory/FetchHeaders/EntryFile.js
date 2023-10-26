import KeysJson from './Keys.json' assert {type: 'json'};
// import BodyKeysJson from "../../../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json" assert {type: 'json'};
import BodyKeysJson from "./BodyKeys.json" assert {type: 'json'};

// import ApiConfigJson from "../../../../../../../../ApiConfig.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    // let jVarLocalBranchName = ApiConfigJson.ForFetch.FileNameOnly;
    
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }