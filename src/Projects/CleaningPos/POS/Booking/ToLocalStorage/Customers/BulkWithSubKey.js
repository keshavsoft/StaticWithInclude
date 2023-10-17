import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inData }) => {
    let jVarLocalData = {};
    jVarLocalData[CommonKeys.CustomersSubKey] = inData;

    StartFuncBulk({ inData: jVarLocalData });

    // localStorage.setItem(CommonKeys.Customers, JSON.stringify(inData));
};

export { StartFunc };