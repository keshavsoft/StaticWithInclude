import { StartFunc as StartFuncBulk } from "./Bulk.js"
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ItemsInOrder/InsertWithCalculations.js";
import { StartFunc as StartFuncToLocalStorageAddOnData } from "../../ToLocalStorage/AddOnData/Bulk.js";

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });
    
    if (inPk in jVarLocalDataNeeded) {
        StartFuncToLocalStorageAddOnData({ inData: jVarLocalDataNeeded[inPk].AddOnData });
        StartFuncToLocalStorage({ inData: jVarLocalDataNeeded[inPk].ItemsInOrder });

        return jVarLocalDataNeeded[inPk];
    };
};

export { StartFunc }; 