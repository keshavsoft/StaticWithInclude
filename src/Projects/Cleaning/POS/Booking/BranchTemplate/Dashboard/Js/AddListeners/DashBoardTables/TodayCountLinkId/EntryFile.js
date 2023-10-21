import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalTodayCountLinkId = document.getElementById("TodayCountLinkId");

    if (jVarLocalTodayCountLinkId === null === false) {
        jVarLocalTodayCountLinkId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };