import { jFCreateFoldersToDom } from "./CreateNew/ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./CreateNew/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
