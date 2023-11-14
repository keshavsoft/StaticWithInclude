import { StartFunc as StartFuncButtonClickFunc } from "./RedirectToBranch.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementsByClassName("ButtonClickClass");

    for (let i = 0; i < jVarLocalRefreshBSTableId.length; i++) {

        jVarLocalRefreshBSTableId[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
        
    };
};

export { StartFunc };