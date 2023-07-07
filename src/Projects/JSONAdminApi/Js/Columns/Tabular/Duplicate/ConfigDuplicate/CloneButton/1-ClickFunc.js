import { StartFunc as StartFuncButtonClickFunc } from "./3-ButtonClickFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inProjectName, inevent: event })
        });
    };
};

export { StartFunc };