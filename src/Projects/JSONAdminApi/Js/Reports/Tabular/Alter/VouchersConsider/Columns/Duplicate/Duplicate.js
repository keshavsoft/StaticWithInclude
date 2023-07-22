import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
// import { jFCloneFunc as jFCloneFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { StartFunc as StartFuncDuplicateButton } from "./DuplicateButton/1-ClickFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // jFCloneFuncAddlisteners();
    StartFuncDuplicateButton();
});
