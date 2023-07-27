import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { jFUpdateFunc as jFUpdateFuncAddlisteners } from "./Addlisteners.js";


jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFuncAddlisteners();
});
