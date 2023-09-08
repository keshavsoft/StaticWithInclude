import { StartFunc as StartFuncLoadToDataList } from "./Customers/LoadToDataList.js";
// import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    // StartFuncFromUrlParams();
    StartFuncLoadToDataList();
};

export { StartFunc };