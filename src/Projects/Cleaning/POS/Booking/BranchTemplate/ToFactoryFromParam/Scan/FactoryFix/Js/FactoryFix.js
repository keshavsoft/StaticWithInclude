import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
   StartFuncFormLoadBeforeAdmin();

   let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncFormLoad });
   if (jVarLocalFromAdmin) {
      StartFuncFormLoad();
      StartFuncAddListeners();

   };
   // StartFuncFormLoad();
   // StartFuncAddListeners();
};

StartFunc();