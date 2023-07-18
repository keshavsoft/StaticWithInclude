import { jFCreateFoldersToDom } from "./CreateNew/ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./CreateNew/Addlisteners.js";
import { StartFunc as StartFuncShowOnArrayFetch } from "./CreateNew/ShowOnDom/ShowOnArrayFetch.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncShowOnArrayFetch();
    StartFuncAddlisteners();
});
