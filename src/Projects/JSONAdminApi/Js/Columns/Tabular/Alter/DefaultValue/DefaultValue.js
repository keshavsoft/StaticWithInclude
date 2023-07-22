import { jFUpdateFunc } from "./Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);

    jFUpdateFunc();
});
