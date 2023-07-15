import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalUpdateButtonClass = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateButtonClass.length; i++) {
        jVarLocalUpdateButtonClass[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };