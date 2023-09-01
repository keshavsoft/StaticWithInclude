import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
// import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/LoginButtonOnModalId.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/LoginButtonOnModalId/1-ClickAssign.js";

const StartFunc = () => {
    StartFuncAddlisteners();

    let jVarLocalNavBarloginId = document.getElementById("NavBarloginId");

    if (jVarLocalNavBarloginId === null === false) {
        jVarLocalNavBarloginId.addEventListener("click", StartFuncCheckLogin);
    };
};

export { StartFunc };