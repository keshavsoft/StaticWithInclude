// import { StartFunc as StartFuncFromLocalStorage } from "../../../FromLocalStorage/Customers.js";
import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/Customers.js";

const StartFunc = () => {
    let jVarLocalDataNeeded = StartFuncFromLocalStorage();
    console.log("jVarLocalDataNeeded",jVarLocalDataNeeded);
    let jVarLocalHtmlId = "CustomerDataListId";
    let jVarLocalCustomerDataListId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDataNeeded === undefined === false) {
        LocalFillDataList({ inData: Object.values(jVarLocalDataNeeded), inCustomerDataListId: jVarLocalCustomerDataListId });
    };
};

let LocalFillDataList = ({ inData, inCustomerDataListId }) => {
    inCustomerDataListId.innerHTML = "";

    if (inData.length) {
        for (var i = 0, len = inData.length; i < len; i++) {
            let LoopInsideOption = document.createElement("option");
            LoopInsideOption.value = `${inData[i].CustomerName} : ${inData[i].Mobile}`;
            inCustomerDataListId.append(LoopInsideOption);
        }
    }
};

export { StartFunc };