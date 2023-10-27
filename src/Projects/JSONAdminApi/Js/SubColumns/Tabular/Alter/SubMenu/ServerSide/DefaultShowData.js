import { jFUpdateFunc } from "./DefaultShowData/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DefaultShowData/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
