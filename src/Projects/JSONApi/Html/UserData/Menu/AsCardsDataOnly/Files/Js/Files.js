import { ReturnFolderName as urlSearchParamsReturnFolderName } from "./urlSearchParams.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/ForHeader.js";
import { StartFunc as StartFuncFromLocalStorage } from "./Header/FromLocalStorage.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/ShowOnDom/Entry.js";

StartFuncToLocalStorage().then(PromiseData => {
    StartFuncFromLocalStorage();
});

let jVarLocalFromReturnFolderName = urlSearchParamsReturnFolderName();


if ("FolderName" in jVarLocalFromReturnFolderName) {
    StartFuncFormLoad();
    
};