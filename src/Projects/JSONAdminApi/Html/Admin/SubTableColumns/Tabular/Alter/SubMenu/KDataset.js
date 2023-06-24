import { jFUpdateFunc } from "./KDataset/Addlisteners.js";
import { StartFunc as StartFuncShowOnDom } from "./KDataset/ShowOnDom.js";
import { StartFunc as StartFuncAdminData } from "../../../../../AdminData/StartFunc.js";
import ApiConfig from "../../../../ApiConfig.json" assert{type: "json"};

let commonProjectName = ApiConfig.ProjectName;

let StartFunc = () => {
    let localAdminDataStartFunc = StartFuncAdminData();

    if (localAdminDataStartFunc) {
        StartFuncShowOnDom({ inProjectName: commonProjectName }).then(FromjFCreateFoldersToDom => {

            jFUpdateFunc({ inProjectName: commonProjectName });
        });
    }
};

StartFunc();