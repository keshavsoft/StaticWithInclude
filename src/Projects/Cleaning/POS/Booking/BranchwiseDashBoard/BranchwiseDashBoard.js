import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncAddListenersFromJs } from "./Js/AddListeners/StartFunc.js";
import { StartFunc as StartFuncAdminDataWithClickFunc } from "../../../AdminDataWithClickFunc/StartFunc.js";

let jFLocalAfterLoginSuccess = () => {
    StartFuncAddListeners();

};

const StartFunc = () => {

    let jVarLocalFromAdmin = StartFuncAdminDataWithClickFunc({ inFormLoadFuncToRun: jFLocalAfterLoginSuccess });

    if (jVarLocalFromAdmin === false) {
        return;
    };

    jFLocalAfterLoginSuccess();
    StartFuncAddListenersFromJs();
    StartFuncAddListeners();

    let jVarLocalHtmlId = 'StatusId';
    let jVarLocalStatusId = document.getElementById(jVarLocalHtmlId);
    jVarLocalStatusId.click();
};

StartFunc();