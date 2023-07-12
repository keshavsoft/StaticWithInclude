import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalDeleteButtonClassName = document.getElementsByClassName("DeleteWithcheckButtonClass");

    for (let i = 0; i < jVarLocalDeleteButtonClassName.length; i++) {
        jVarLocalDeleteButtonClassName[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };