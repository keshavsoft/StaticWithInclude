// import { StartFunc as StartFuncLoadToDataList } from "./Customers/LoadToDataList.js";
// import { StartFunc as StartFuncToLocalStorageEmpty } from "./ToLocalStorageEmpty.js";

import { StartFunc as StartFuncButtonClickFunc } from "./CardBuildFetch/2-ButtonClickFunc.js";

const StartFunc = () => {
    // StartFuncToLocalStorageEmpty();
    // StartFuncLoadToDataList();
    StartFuncButtonClickFunc();
};

export { StartFunc };