import { StartFunc as StartFuncServer } from "./ShowOnDom/Server.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncFormFuncs } from "./FormFuncs/StartFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncServer();
    StartFuncFormFuncs();
});
