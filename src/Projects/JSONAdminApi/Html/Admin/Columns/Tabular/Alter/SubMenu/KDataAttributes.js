import { jFUpdateFunc } from "./KDataAttributes/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDataAttributes/ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./KDataAttributes/AddListeners/1-ClickAssign.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    // jFUpdateFunc();
    StartFuncAddListeners();
});
