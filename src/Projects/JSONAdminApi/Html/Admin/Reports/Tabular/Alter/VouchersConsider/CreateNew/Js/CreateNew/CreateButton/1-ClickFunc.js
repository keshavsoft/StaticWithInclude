import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCreateButtonClassName = document.getElementsByClassName("CreateButtonClass");

    for (let i = 0; i < jVarLocalCreateButtonClassName.length; i++) {
        jVarLocalCreateButtonClassName[i].addEventListener("click", (event) => {

            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };