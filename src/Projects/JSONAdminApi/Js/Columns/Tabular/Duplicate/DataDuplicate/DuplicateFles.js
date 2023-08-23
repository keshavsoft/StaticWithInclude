// import { jFUpdateFunc } from "./DuplicateFiles/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DuplicateFiles/ShowOnDom.js";
import ApiConfigJson from '../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncClickFunc } from "./DuplicateFiles/DuplicateWithButton/1-ClickFunc.js";
let jVarCommonProjectName = ApiConfigJson.ProjectName;


jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(FromjFCreateFoldersToDom => {
    // jFUpdateFunc({ inProjectName: jVarCommonProjectName });
    StartFuncClickFunc();
});
