import { ReturnFolderAndFileName } from "./urlSearchParams.js";
import { StartFunc as StartFuncFromLocalStorage } from "./Header/FromLocalStorage.js";
import { StartFunc as StartFuncFormLoad  } from "./FormLoad/ShowOnDom/Entry.js";

StartFuncFromLocalStorage();

let jVarLocalFromReturnFolderAndFileName = ReturnFolderAndFileName();

if ("FolderName" in jVarLocalFromReturnFolderAndFileName) {
    if ("FileName" in jVarLocalFromReturnFolderAndFileName) {
        
        StartFuncFormLoad();

       
    };
};