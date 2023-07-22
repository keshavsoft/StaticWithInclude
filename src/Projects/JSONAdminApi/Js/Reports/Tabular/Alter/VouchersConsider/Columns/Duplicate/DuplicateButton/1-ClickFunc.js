import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("DuplicateButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };