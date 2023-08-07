import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
import { StartFunc as StartFuncLoginButtonOnModalId } from "./Addlisteners/LoginButtonOnModalId.js";

const StartFunc = () => {
    StartFuncLoginButtonOnModalId();

    let jVarLocalNavBarloginId = document.getElementById("NavBarloginId");

    if (jVarLocalNavBarloginId === null === false) {
        jVarLocalNavBarloginId.addEventListener("click", StartFuncCheckLogin);
    };
};

export { StartFunc };