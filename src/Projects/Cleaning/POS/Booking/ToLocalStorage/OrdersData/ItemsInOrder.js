import CommonKeys from "../Keys.json" assert { type: "json" };
// import CommonConfigJson from "../../Config.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    // let jVarLocalBranchName = CommonConfigJson.BranchName;
    let jVarLocalBranchName = inBranchName;

    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    if (jVarLocalBranchName in jVarLocalJsonData === false) {
        jVarLocalJsonData[jVarLocalBranchName] = {};
    };

    let jVarLocalParsed = jVarLocalJsonData[jVarLocalBranchName];

    if (inPk in jVarLocalParsed) {
        jVarLocalParsed[inPk] = {
            ...jVarLocalParsed[inPk],
            ...inEntry
        };

        StartFuncBulk({ inData: jVarLocalJsonData });

        return parseInt(inPk);
    };

    return false;
};

export { StartFunc };