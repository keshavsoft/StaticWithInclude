import { StartFunc as StartFuncAddlisteners } from "./DuplicateScreen/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DuplicateScreen/ShowOnDom.js";
import ApiConfigJson from '../../ApiConfig.json' assert {type: 'json'};

let jVarCommonProjectName = ApiConfigJson.ProjectName;

jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
