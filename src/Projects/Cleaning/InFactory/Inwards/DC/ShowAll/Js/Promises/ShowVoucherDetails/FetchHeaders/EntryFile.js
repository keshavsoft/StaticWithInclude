import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from "../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json" assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }