import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    // StartFuncShowAlerts();
    StartFuncAddlisteners();
    jFLocalDiscountKeyUp();
};

let jFLocalDiscountKeyUp = () => {
    let event = new Event("keyup");
    document.getElementById("DiscountPerId").dispatchEvent(event);
};

export { StartFunc };
