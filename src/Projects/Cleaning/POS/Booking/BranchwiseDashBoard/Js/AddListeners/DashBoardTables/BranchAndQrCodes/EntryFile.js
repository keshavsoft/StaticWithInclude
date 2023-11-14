import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickRedirect } from "./ButtonClickRedirect/EntryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("BranchAndQrCodesRefreshBSTableId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", () => {
            StartFuncButtonClickFunc().then(ele => {
                StartFuncButtonClickRedirect();
            });
        });
    };
};

export { StartFunc };