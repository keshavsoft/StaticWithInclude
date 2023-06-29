import { jFUpdateFunc } from "./DisplayNameAlter/Addlisteners";
import { jFCreateFoldersToDom } from "./DisplayNameAlter/ShowOnDom";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
