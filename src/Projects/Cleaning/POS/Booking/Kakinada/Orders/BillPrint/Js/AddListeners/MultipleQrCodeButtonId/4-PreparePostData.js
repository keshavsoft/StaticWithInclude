import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = ({inCurrentTarget}) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalBodyData = {
        ...PrepareKeysJson
    };
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalFileNameOnly = ApiConfigJson.JsonFileNameOnly
    jVarLocalBodyData.inValueToCheck.GenerateReference.ReferncePk = jVarLocalRowPk;
    jVarLocalBodyData.inValueToCheck.GenerateReference.FileNameOnly = jVarLocalFileNameOnly;

    return jVarLocalBodyData;
};

export { StartFunc };