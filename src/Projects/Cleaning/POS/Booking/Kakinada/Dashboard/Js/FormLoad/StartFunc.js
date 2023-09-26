import { StartFunc as StartFuncLoadToDataList } from "./Customers/LoadToDataList.js";
import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncBranchNameId } from "./BranchNameId/StartFunc.js";
const StartFunc = () => {
    StartFuncFromUrlParams();

    StartFuncFetchFuncs().then(() => {
        StartFuncLoadToDataList()
    });
    StartFuncBranchNameId();
};

export { StartFunc };