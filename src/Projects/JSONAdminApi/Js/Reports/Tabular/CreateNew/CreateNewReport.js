import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { jFCreateReportToDom } from "./ShowOnDom/ShowOnDom.js";
import ApiConfigJson from '../../../Admin/ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAdminData } from "../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";

let jVarCommonProjectName = ApiConfigJson.ProjectName;

const StartFunc = () => {
    let jVarLocalFromAdmin = StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad({ inProjectName: jVarCommonProjectName });

        jFCreateReportToDom({ inProjectName: jVarCommonProjectName }).then(() => {
            StartFuncAddlisteners({ inProjectName: jVarCommonProjectName });

            StartFuncAfterDomLoad({inProjectName: jVarCommonProjectName});
        });
    };
};

StartFunc();