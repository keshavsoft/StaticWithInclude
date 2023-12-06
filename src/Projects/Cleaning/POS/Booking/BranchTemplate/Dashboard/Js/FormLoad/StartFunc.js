import { StartFunc as StartFuncLoadToDataList } from "./Customers/LoadToDataList.js";
import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    
    StartFuncFromUrlParams();

    StartFuncFetchFuncs().then(() => {
        StartFuncLoadToDataList()
    });
};

export { StartFunc };