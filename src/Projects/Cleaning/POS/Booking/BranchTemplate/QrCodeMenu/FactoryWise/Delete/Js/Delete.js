import { StartFunc as StartFuncShowOnDomEntry } from "./ShowOnDom/Entry.js";
import { StartFunc as AddListenersEntry } from "./AddListeners/Entry.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";


const StartFunc = () => {

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDomEntry });

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDomEntry().then(() => {
            AddListenersEntry();
        });
    };
};

StartFunc();