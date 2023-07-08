import { jFUpdateFunc as jFUpdateFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncFormFuncs } from "./FormFuncs/StartFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // jFUpdateFuncAddlisteners();
    StartFuncFormFuncs();
});
