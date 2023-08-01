import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";
// import CommonConfigJson from "../../Config.json" assert { type: "json" };

import CommonConfigJson from "../../../../Config.json" assert { type: "json" };

const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry,inPk }) => {
    let jVarLocalBranchName = CommonConfigJson.BranchName;
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData= JSON.parse(jVarLocalFromLocalStorage);

    if (jVarLocalBranchName in jVarLocalJsonData === false) {
        jVarLocalJsonData[jVarLocalBranchName] = {};
    };

    let jVarLocalParsed = jVarLocalJsonData[jVarLocalBranchName];

    jVarLocalParsed[inPk] = jFLocalPrepareData({ inEntry });

    jFLocalPrepareData({ inEntry });

    StartFuncBulk({ inData: jVarLocalJsonData });

    return inPk;

    
};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalItemData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalvalues = Object.values(jVarLocalItemData);
    let jVarLocalPkArray = jVarLocalvalues.map(element => element.pk);
    const max = Math.max(...jVarLocalPkArray);

    return {
        ...inEntry,
        pk: max + 1
    };
};

export { StartFunc };