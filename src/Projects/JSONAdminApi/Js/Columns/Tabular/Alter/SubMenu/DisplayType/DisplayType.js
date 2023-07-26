import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { jFUpdateFunc } from "./Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    
    jFUpdateFunc();
});
