import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalTotalCountLinkId = document.getElementById("TotalCountLinkId");

    if (jVarLocalTotalCountLinkId === null === false) {
        jVarLocalTotalCountLinkId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };