import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAddListenersFuncs } from "./AddListenersFuncs/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom, inSuccessPrimary: true });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
            StartFuncAddListenersFuncs();
            jFLocalSetFocus();
        });
    };
};

let jFLocalSetFocus = () => {
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalFirstInput = jVarLocalKCont1.querySelector("input");
    jVarLocalFirstInput.focus();
}

StartFunc();