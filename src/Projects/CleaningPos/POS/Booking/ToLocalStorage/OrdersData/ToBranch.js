import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/OrdersData/Original.js";

let StartFunc = ({ inData, inBranchName }) => {
    let jVarLocalOrdersDataParsed = StartFuncFromLocalStorage();

    jVarLocalOrdersDataParsed[inBranchName] = inData

    localStorage.setItem(CommonKeys.OrdersData, JSON.stringify(jVarLocalOrdersDataParsed));
};

export { StartFunc };