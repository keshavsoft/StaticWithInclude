import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncAddlisteners });
    
    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom();
        StartFuncAddlisteners();
    };
};

StartFunc();