// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/OrdersData/FromPk.js";

import ApiConfigJson from "../../../ApiConfig.json" assert { type: "json" };

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: ApiConfigJson.BranchName
    });

    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.JsonData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.JsonData.CustomerData.CustomerMobile });
    jFLocalBranchNameId({ inBranchNameId: jVarLocalData.JsonData.OrderData.BranchName });
    jFLocalToInputCurrentdateandtime({ inCurrentdateandtime: jVarLocalData.JsonData.OrderData.Currentdateandtime });
    jFLocalOrderAmount({ inData: jVarLocalData.JsonData });
};

let jFLocalToInputCurrentdateandtime = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined === false) {
        let jVarLocalHtmlId = 'Currentdateandtime';
        let jVarLocalCurrentdateandtime = document.getElementById(jVarLocalHtmlId);
        jVarLocalCurrentdateandtime.value = inCurrentdateandtime;
    }
};

let jFLocalBranchNameId = ({ inBranchNameId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = inBranchNameId;
};

let jFLocalOrderAmount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData.ItemsInOrder).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    let jVarLocalAddOn = Object.values(inData.AddOnData).map(element => {
        return element.AddOnRate;
    });

    const sumOfAddOn = jVarLocalAddOn.reduce((partialSum, a) => partialSum + a, 0);
};

let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inOrderInfoCustomerNameId;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.value = inOrderInfoCustomerMobileId;
};
export { StartFunc };