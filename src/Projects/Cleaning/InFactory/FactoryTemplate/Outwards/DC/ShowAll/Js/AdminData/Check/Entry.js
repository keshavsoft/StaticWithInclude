import { StartFunc as StartFuncCookie } from "./Cookie/Cookie.js";
import { StartFunc as StartFuncHeader } from "./Cookie/Header.js";
import { StartFunc as StartFuncDeleteCookie } from "./Cookie/DeleteCookie.js";

const StartFunc = ({ inSuccessSuccess }) => {

    let jVarLocalCookieValue = StartFuncCookie();

    if (jVarLocalCookieValue === null) {
        StartFuncDeleteCookie();

        return false;
    } else {
        StartFuncHeader({ inSuccessSuccess });

        return true;
    };
};







export { StartFunc };