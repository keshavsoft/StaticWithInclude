import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom });;


    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then(() => {
            StartFuncAddListeners();
        });
    };
};

StartFunc();