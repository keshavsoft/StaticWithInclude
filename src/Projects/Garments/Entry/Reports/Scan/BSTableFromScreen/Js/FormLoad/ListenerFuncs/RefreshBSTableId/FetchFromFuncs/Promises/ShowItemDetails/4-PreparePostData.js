// import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};
import BodyKeysJson from "./ForPostKeysAsIs.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = BodyKeysJson;

    return jVarLocalBodyData;
    
};

export { StartFunc };