import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncUnCheckFunc } from "./UncheckFunc.js";

const StartFunc = () => {
    let jVarLocalAddOnMenuId = document.getElementById("AddOnMenuId");

    if (jVarLocalAddOnMenuId === null === false) {
        jVarLocalAddOnMenuId.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                StartFuncCheckFunc();
            } else {
                StartFuncUnCheckFunc({ inHtmlControl: jVarLocalAddOnMenuId });
            }
        });
    };
};

export { StartFunc };