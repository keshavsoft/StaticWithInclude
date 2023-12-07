import { StartFunc as StartFuncNavigation } from "./Navigation/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    StartFuncNavigation();
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom });;


    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then(() => {
            StartFuncAddListeners();
        });
    };
};

StartFunc();