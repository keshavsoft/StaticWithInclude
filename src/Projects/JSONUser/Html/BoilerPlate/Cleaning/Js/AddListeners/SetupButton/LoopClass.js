import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

    jVarLocalSetupButtonClass.forEach(box => {
        box.addEventListener('click', StartFuncClickFunc);
    });
};

export { StartFunc };