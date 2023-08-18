import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    let jVarLocalBranchName = inBranchName;

    if (jVarLocalBranchName === undefined) {
        console.log("jVarLocalBranchName undefined in toLocalStorage ");
        return 0;
    };

    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    if (jVarLocalBranchName in jVarLocalJsonData === false) {
        jVarLocalJsonData[jVarLocalBranchName] = {};
    };

    let jVarLocalParsed = jVarLocalJsonData[jVarLocalBranchName];
    let jVarLocalNewData = jFLocalPrepareData({ inEntry });

    jVarLocalParsed[inPk] = jVarLocalNewData;

    StartFuncBulk({ inData: jVarLocalJsonData });

    return inPk;
};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalReturnObject = {};
    jVarLocalReturnObject.AddOnData = {};
    jVarLocalReturnObject.CustomerData = {};
    jVarLocalReturnObject.OrderData = {};
    jVarLocalReturnObject = {
        ...jVarLocalReturnObject,
        ...inEntry
    };
    return jVarLocalReturnObject;
};

export { StartFunc };