import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};

const StartFunc = ({inCurrentTarget}) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalBodyData = {
        ...PrepareKeysJson
    };
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    console.log("jVarLocalRowPk",jVarLocalRowPk);
    jVarLocalBodyData.inValueToCheck.GenerateReference.ReferncePk = jVarLocalRowPk;

    return jVarLocalBodyData;
};

export { StartFunc };