import { StartFunc as StartFuncLoadToDataList } from "./Customers/LoadToDataList.js";
import { StartFunc as StartFuncToLocalStorageEmpty } from "./ToLocalStorageEmpty.js";

const StartFunc = () => {
    StartFuncToLocalStorageEmpty();
    StartFuncLoadToDataList();
};

export { StartFunc };