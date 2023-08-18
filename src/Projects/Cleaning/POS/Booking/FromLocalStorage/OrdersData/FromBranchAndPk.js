import { StartFunc as StartFuncBulk } from "./Bulk.js"

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });

    let jVarLocalReturnData = {};
    jVarLocalReturnData.KTF = false;

    if (inPk in jVarLocalDataNeeded) {
        jVarLocalReturnData.JsonData = jVarLocalDataNeeded[inPk];
        jVarLocalReturnData.KTF = true;
    };

    return jVarLocalReturnData;
};

export { StartFunc };