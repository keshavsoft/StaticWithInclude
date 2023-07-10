import { StartFunc as StartFuncUpDataButton } from "./ListenerFuncs/UpDataButton/StartFunc.js";
import { StartFunc as StartFuncUpdateWithCheck } from "./ListenerFuncs/UpdateWithCheck/StartFunc.js";

let StartFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");
    let jVarLocalUpdateWithCheckButtonClass = document.getElementsByClassName("UpdateWithCheckButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", (event) => {
            StartFuncUpDataButton({ inevent: event })
        })
    };

    for (let i = 0; i < jVarLocalUpdateWithCheckButtonClass.length; i++) {
        jVarLocalUpdateWithCheckButtonClass[i].addEventListener("click", (event) => {
            StartFuncUpdateWithCheck({ inevent: event })
        })
    };
};

export { StartFunc };