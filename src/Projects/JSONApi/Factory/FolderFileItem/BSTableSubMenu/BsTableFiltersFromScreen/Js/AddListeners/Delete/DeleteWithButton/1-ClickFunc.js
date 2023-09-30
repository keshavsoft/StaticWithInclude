import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalButtonClassName = document.getElementsByClassName("DeleteButtonClass");
    console.log("jVarLocalButtonClassName::",jVarLocalButtonClassName);

    for (let i = 0; i < jVarLocalButtonClassName.length; i++) {
        jVarLocalButtonClassName[i].addEventListener("click",async (event) => StartFuncButtonClickFunc({ inevent: event }));
    };
};

export { StartFunc };