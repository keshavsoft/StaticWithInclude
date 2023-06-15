import { jFUpdateFunc } from "./KDataset/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDataset/ShowOnDom.js";
// import { AdminDataStartFunc } from "../../../../../AdminData/StartFunc.js";

import { StartFunc as StartFuncAdminData } from "../../../../../AdminData/StartFunc.js";

import ApiConfig from "../../../../ApiConfig.json" assert{type: "json"};

let commonProjectName = ApiConfig.ProjectName;

let StartFunc = () => {
    let localAdminDataStartFunc = StartFuncAdminData();

    if (localAdminDataStartFunc) {
        jFCreateFoldersToDom({ inProjectName: commonProjectName }).then(FromjFCreateFoldersToDom => {

            jFUpdateFunc({ inProjectName });
        });
    }
};

StartFunc();