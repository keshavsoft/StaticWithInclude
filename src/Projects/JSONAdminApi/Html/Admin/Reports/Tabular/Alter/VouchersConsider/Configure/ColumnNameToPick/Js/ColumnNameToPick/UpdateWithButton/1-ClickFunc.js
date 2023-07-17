import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalUpdateWithButtonClassName = document.getElementsByClassName("UpdateWithButtonClass");

    for (let i = 0; i < jVarLocalUpdateWithButtonClassName.length; i++) {
        jVarLocalUpdateWithButtonClassName[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };