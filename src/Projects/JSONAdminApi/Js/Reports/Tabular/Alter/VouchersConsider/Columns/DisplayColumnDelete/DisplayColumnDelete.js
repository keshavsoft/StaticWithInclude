import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteButton/1-ClickFunc.js";
// import { jFCloneFunc as jFCloneFuncAddlisteners } from "./Addlisteners/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // jFCloneFuncAddlisteners();
    StartFuncDeleteButton();
});
