import { jFUpdateFunc as jFUpdateFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncServer } from "./FetchCalls/Server.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncServer();
    jFUpdateFuncAddlisteners();
});
