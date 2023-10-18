import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalClassName = document.getElementsByClassName("SettlementButtonClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener('click', StartFuncClickFunc);
    }
};

export { StartFunc };