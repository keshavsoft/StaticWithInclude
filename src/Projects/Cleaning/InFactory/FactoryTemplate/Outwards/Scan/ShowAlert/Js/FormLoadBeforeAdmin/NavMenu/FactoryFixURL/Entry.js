import { StartFunc as StartFuncFactoryFixNewURL } from "./FactoryFixNewURL.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'FactoryFixId';
    let jVarlocalFactoryFixId = document.getElementById(jVarLocalHtmlId);

    jVarlocalFactoryFixId.addEventListener("click", () => StartFuncFactoryFixNewURL());
};

export { StartFunc };