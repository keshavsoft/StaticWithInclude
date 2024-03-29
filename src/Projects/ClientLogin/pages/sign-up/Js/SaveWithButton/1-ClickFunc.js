import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalHtmlId = "SignUpButtonId";
    let jVarLocalSignUpButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalSignUpButtonId.addEventListener("click", async () => {
        StartFuncButtonClickFunc({ inProjectName });
    });
};

export { StartFunc };