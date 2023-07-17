import { jFCreateFoldersToDom } from "./ColumnNameToPick/ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncFormFuncs } from "./ColumnNameToPick/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncFormFuncs();
});
