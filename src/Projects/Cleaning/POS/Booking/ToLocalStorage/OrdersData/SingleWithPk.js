import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";
// import CommonConfigJson from "../../../../Config.json" assert { type: "json" };

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    // let jVarLocalBranchName = CommonConfigJson.BranchName;
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

    // jVarLocalParsed[inPk] = jFLocalPrepareData({ inEntry });
    jVarLocalParsed[inPk] = jVarLocalNewData;

    console.log("jVarLocalNewData", jVarLocalNewData);
    console.log("inEntry", inEntry);
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