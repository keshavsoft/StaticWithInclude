// import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/ItemsInOrder/Bulk.js";


// import { StartFunc as StartFuncFromPk } from "./../../../../../../../../../FromLocalStorage/ItemsInOrder/FromPk.js";

import { StartFunc as StartFuncFromPk } from "../../../../FromLocalStorage/ItemsInOrder/FromPk.js";


import { StartFunc as StartFuncFromAddOnsAll } from "../../FromLocalStorage/FromAddOnsAll.js";
// import { StartFunc as StartFuncFromAddOns } from "../../../../../../../../../FromLocalStorage/AddOnData/FilterAddOnData.js";

import { StartFunc as StartFuncFromAddOns } from "../../../../FromLocalStorage/AddOnData/FilterAddOnData.js";



let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestCardHeader = jVarLocalCurrentTarget.closest(".card-header");

    let jVarLocalAddOnItemId = jFLocalFromDomAddOnItemId();

    let jvarLocalOption = document.getElementById("AddOnServiceId").value;

    if (jvarLocalOption === '8') {
        return jFLocalIfOption8({ AddOnItemId: jVarLocalAddOnItemId, ClosestCardHeader: jVarLocalClosestCardHeader });
    } else {
        return jFLocalForAddOn();
    };
};

let jFLocalForDiscount = ({ inCardHeader }) => {

    let jVarLocalAddRate = jFLocalFromDomAddOnRateId();
    if (jVarLocalAddRate >= 0) {
        return false;
    } else {
        let jVarLocalItemId = jFLocalFromDomAddOnItemId();
        let localFromPk = StartFuncFromPk({ inPk: jVarLocalItemId });
        let jvarLocalRate = localFromPk.Rate;
        let jVarLocalPercentage = (jVarLocalAddRate / jvarLocalRate) * 100;

        if (Math.abs(jVarLocalPercentage) > 10) {
            inCardHeader.style = "background-color: red;"
            return false;
        }
        else {
            console.log("Valid");
            inCardHeader.style = "background-color:"

            return true;
        };
    };

};


let jFLocalFromDomAddOnRateId = () => {
    let jVarLocalHtmlAddOnRateId = 'AddOnRateId';
    let jVarHtmlAddOnRateId = document.getElementById(jVarLocalHtmlAddOnRateId);
    let jVarHtmlAddOnRateIdValue = jVarHtmlAddOnRateId.value.trim();
    return jVarHtmlAddOnRateIdValue;
};

let jFLocalFromDomAddOnItemId = () => {
    let jVarLocalHtmlAddOnItemId = 'AddOnItemId';
    let jVarHtmlAddOnItemId = document.getElementById(jVarLocalHtmlAddOnItemId);
    let jVarHtmlAddOnItemIdValue = jVarHtmlAddOnItemId.value.trim();
    return jVarHtmlAddOnItemIdValue;
};

let jFLocalForAddOn = () => {
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarLocaljVarLocalAddOnItemIdValue in jVarFromLocalStorage === false) {
        return false;
    };

    if (jFLocalForAddOnService() === false) return false;

    return true;
};
const jFLocalForAddOnService = () => {
    let jVarLocalHtmlId = "AddOnServiceId";
    let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalAddOnServiceIdValue = jVarLocalAddOnServiceId.value;

    if (jVarLocalAddOnServiceIdValue === "") {
        jVarLocalAddOnServiceId.classList.add("is-invalid");
        jVarLocalAddOnServiceId.focus();
        return false;
    } else {
        jVarLocalAddOnServiceId.classList.remove("is-invalid");
        jVarLocalAddOnServiceId.classList.add("is-valid");
    };
};

let jfLocalDiscountCheck1 = () => {
    let jVarLocalItemId = jFLocalFromDomAddOnItemId();

    let jVarLocalFromAddOnData = StartFuncFromAddOnsAll();

    if (jVarLocalItemId in jVarLocalFromAddOnData) {
        return false;
    };
    return true;
};

let jfLocalDiscountCheck = () => {
    let jVarLocalItemId = jFLocalFromDomAddOnItemId();

    let jVarLocalFromAddOnData = StartFuncFromAddOnsAll();

    if (jVarLocalItemId in jVarLocalFromAddOnData) {
        return false;
    };
    return true;
};

let jFLocalIfOption8 = ({ AddOnItemId, ClosestCardHeader }) => {

    let jVarLocalDataFromAddOns = StartFuncFromAddOns({ inAddOnItemSerial: AddOnItemId });

    let jVarLocalFindData = jVarLocalDataFromAddOns.find(element => {

        return element.AddOnService === "Discount";
    });

    if (jVarLocalFindData === undefined === false) {
        return false;
    };
    return jFLocalForDiscount({ inCardHeader: ClosestCardHeader });

};

export { StartFunc };