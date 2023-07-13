import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({ inPk });

    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.JsonData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.JsonData.CustomerData.CustomerMobile });
    jFLocalOrderAmount({ inData: jVarLocalData.JsonData });
    jFLocalShowDiscount({ inData: jVarLocalData.JsonData });
    jFLocalNetOrderAmount({ inData: jVarLocalData.JsonData });
    jFLocalBranchNameId({ inOrderInfoCustomerBranchId: jVarLocalData.JsonData.OrderData.BranchName });
    console.log("jVarLocalData",jVarLocalData);

};

let jFLocalShowDiscount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData.ItemsInOrder).map(element => {
        return (element.Rate*element.DisPer)/100;
    });

    const Discount = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalDiscountId({ inDiscountId: Math.round(Discount)});

    return Math.round(Discount);

};

let jFLocalNetOrderAmount = ({ inData }) => {
    let jVarLocalTotalSum = jFLocalOrderAmount({ inData });
    let jVarLocalDiscount = jFLocalShowDiscount({ inData });

    jFLocalNetAmountId({ inNetAmountId: (jVarLocalTotalSum - jVarLocalDiscount) });

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

    jFLocalOrderAmountId({ inOrderAmountId: sum + sumOfAddOn });

    return sum+sumOfAddOn;

};



let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inOrderInfoCustomerNameId;
};

let jFLocalBranchNameId = ({ inOrderInfoCustomerBranchId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
   let jVarLocalOrderInfoBranchNameId = document.getElementById(jVarLocalHtmlId);
   jVarLocalOrderInfoBranchNameId.value = inOrderInfoCustomerBranchId;
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};

let jFLocalNetAmountId = ({ inNetAmountId }) => {
    let jVarLocalHtmlId = 'NetAmountId';
   let jVarLocalNetAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalNetAmountId.innerHTML = inNetAmountId;
};

let jFLocalDiscountId = ({ inDiscountId }) => {
    let jVarLocalHtmlId = 'DiscountId';
   let jVarLocalDiscountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalDiscountId.innerHTML = inDiscountId;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.value = inOrderInfoCustomerMobileId;
};


export { StartFunc };