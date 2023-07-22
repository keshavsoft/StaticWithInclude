import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncUpdateButton } from "./UpdateButton/1-ClickFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncUpdateButton();
});
