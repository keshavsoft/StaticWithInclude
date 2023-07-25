import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncUpdateWithButton } from "./UpdateWithButton/1-ClickFunc.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncUpdateWithButton();
});
