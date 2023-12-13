import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

    jVarLocalSetupButtonClass.forEach(box => {
        box.addEventListener('click', StartFuncButtonClickFunc);
    });
};

export { StartFunc };