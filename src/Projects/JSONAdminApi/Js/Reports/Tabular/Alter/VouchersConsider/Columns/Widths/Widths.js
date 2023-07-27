import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
// import { jFCloneFunc as jFCloneFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { StartFunc as StartFuncUpdateButton } from "./UpdateButton/1-ClickFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // jFCloneFuncAddlisteners();
    StartFuncUpdateButton();
});
