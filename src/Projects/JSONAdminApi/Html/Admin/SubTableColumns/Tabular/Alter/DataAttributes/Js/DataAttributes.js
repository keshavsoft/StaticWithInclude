import { jFCreateFoldersToDom } from "./DataAttributes/ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./DataAttributes/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
