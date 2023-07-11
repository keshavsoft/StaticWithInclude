import { StartFunc as StartFuncAddlisteners } from "./FromFolderOnly/Addlisteners.js";
import { jFCreateFoldersToDom } from "./FromFolderOnly/ShowOnDom/ShowOnDom.js";
import ApiConfigJson from '../../../../../../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncShowOnArrayFetch } from "./FromFolderOnly/ShowOnDom/ShowOnArrayFetch.js";

let jVarCommonProjectName = ApiConfigJson.ProjectName;

jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(FromjFCreateFoldersToDom => {
    StartFuncShowOnArrayFetch();
    StartFuncAddlisteners();
});
