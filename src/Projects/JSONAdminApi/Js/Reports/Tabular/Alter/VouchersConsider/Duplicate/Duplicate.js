import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
// import { jFCloneFunc as jFCloneFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { StartFunc as StartFuncCloneButton } from "./CloneButton/1-ClickFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // jFCloneFuncAddlisteners();
    StartFuncCloneButton();
});
