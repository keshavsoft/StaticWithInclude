import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncEntryFile } from "./FormLoad/FetchFuncs/EntryFile.js";

let StartFunc = () =>{
    StartFuncFormLoadBeforeAdmin();
    StartFuncEntryFile();
};

StartFunc();