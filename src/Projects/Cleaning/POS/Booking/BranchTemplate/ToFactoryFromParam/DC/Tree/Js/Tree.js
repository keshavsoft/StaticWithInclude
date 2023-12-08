import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncEntryFile } from "./FormLoad/FetchFuncs/EntryFile.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

let StartFunc = () =>{
    StartFuncFormLoadBeforeAdmin();

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncEntryFile, inSuccessPrimary: true });

    if (jVarLocalFromAdmin) {
        StartFuncEntryFile();
  
     };
};

StartFunc();