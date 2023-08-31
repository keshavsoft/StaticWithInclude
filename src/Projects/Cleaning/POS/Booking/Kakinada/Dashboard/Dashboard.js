import { StartFunc as StartFuncFormLoad } from "./Js/FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
// import { StartFunc as StartFuncAdminData } from "../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncAdminDataWithClickFunc } from "../../../../AdminDataWithClickFunc/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./Js/FormLoadBeforeAdmin/EntryFile.js";

let jFLocalAfterLoginSuccess = () => {
    StartFuncFormLoad();
    StartFuncAddListeners();

    let jVarLocalHtmlId = 'AlertSuccessId';
    let jVarLocalAlertSuccessId = document.getElementById(jVarLocalHtmlId);
    jVarLocalAlertSuccessId.style.display = "";
};

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();

    let jVarLocalFromAdmin = StartFuncAdminDataWithClickFunc({ inFormLoadFuncToRun: jFLocalAfterLoginSuccess });

    if (jVarLocalFromAdmin === false) {
        return;
        // jFLocalHtmlFocusKPasswordInput();
    };

    StartFuncFormLoad();
    StartFuncAddListeners();
};

StartFunc();