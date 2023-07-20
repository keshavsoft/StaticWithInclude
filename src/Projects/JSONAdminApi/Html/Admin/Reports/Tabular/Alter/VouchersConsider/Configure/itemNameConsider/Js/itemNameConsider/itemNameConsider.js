import { StartFunc as StartFuncServer } from "./ShowOnDom/Server.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncServer();
    StartFuncAddlisteners();
});
