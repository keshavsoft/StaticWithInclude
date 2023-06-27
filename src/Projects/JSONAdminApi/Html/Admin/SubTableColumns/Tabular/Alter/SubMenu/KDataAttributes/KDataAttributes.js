import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/UpdateButton/StartFunc.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
