import { StartFunc as StartFuncBulk } from "./Bulk.js"
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ItemsInOrder/InsertWithCalculations.js";

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });

    if (inPk in jVarLocalDataNeeded) {
        StartFuncToLocalStorage({ inData: jVarLocalDataNeeded[inPk].ItemsInOrder });

        return jVarLocalDataNeeded[inPk];
    };
};

export { StartFunc }; 