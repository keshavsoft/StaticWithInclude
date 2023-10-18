import { StartFunc as StartFuncFormLoad } from "./Js/FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncAddListenersFromJs } from "./Js/AddListeners/StartFunc.js";
import { StartFunc as StartFuncAdminDataWithClickFunc } from "../../../../AdminDataWithClickFunc/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./Js/FormLoadBeforeAdmin/EntryFile.js";

let jFLocalAfterLoginSuccess = () => {
    StartFuncFormLoad();
    // StartFuncAddListeners();

    let jVarLocalHtmlId = 'AlertSuccessId';
    let jVarLocalAlertSuccessId = document.getElementById(jVarLocalHtmlId);
    jVarLocalAlertSuccessId.style.display = "";
};

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();

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