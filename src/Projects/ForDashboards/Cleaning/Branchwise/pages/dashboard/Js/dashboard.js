import { StartFunc as StartFuncFoamLoad } from "./FormLoad/EntryFile.js";
import { StartFunc as StartFuncAdminDataWithClickFunc } from "./AdminData/StartFunc.js";


const StartFunc = () => {
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = StartFuncAdminDataWithClickFunc({ inFormLoadFuncToRun: StartFuncFoamLoad });

    if (jVarLocalFromAdmin) {
        StartFuncFoamLoad();
    };
};
StartFunc();