import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "NavSearchId";
    let jVarLocalNavSearchId = document.getElementById(jVarLocalHtmlId);

    jVarLocalNavSearchId.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) {
            StartFuncButtonClickFunc();
        }
    });
};

export { StartFunc }