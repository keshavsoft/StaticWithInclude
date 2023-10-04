import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalMenuId = document.getElementById("ParentButtonId");

    if (jVarLocalMenuId === null === false) {
        jVarLocalMenuId.addEventListener("click", StartFuncButtonClickFunc);
    };

};

export {StartFunc};