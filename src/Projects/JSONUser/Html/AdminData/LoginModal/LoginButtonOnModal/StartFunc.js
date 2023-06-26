import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalLoginButtonOnModalId = document.getElementById("LoginButtonOnModalId");

    if ((jVarLocalLoginButtonOnModalId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalLoginButtonOnModalId.addEventListener("click", async () => {
            await StartFuncButtonClickFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
        });
    };
};

export { StartFunc }
