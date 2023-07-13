import CommonKeys from "../Keys.json" assert { type: "json" };
import CommonConfigJson from "../../Config.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inOrderKey, inSettlementData }) => {
    let jVarLocalBranchName = CommonConfigJson.BranchName;
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalParsed = jVarLocalJsonData[jVarLocalBranchName];

    if (inOrderKey in jVarLocalParsed === false) {
        return false;
    };

    jVarLocalParsed[inOrderKey].CheckOutData = inSettlementData;

    // localStorage.setItem(CommonKeys.OrdersData, JSON.stringify(jVarLocalJsonData));
    return StartFuncBulk({ inData: jVarLocalJsonData });
};

export { StartFunc };