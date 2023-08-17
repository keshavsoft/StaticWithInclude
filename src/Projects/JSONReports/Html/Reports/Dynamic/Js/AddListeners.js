// import { StartFunc as StartFuncFilterDataId } from "./AddListeners/FilterDataId/AddListeners.js";
// import { StartFunc as StartFuncReportButtonId } from "./AddListeners/ReportButtonId/AddListeners.js";

import { StartFunc as StartFuncReportButtonId } from "./AddListeners/ReportButtonId/EntryFile.js";
import { StartFunc as StartFuncFilterDataId } from "./AddListeners/FilterDataId/EntryFile.js";

let StartFunc = () => {
    StartFuncFilterDataId();
    StartFuncReportButtonId();
};

export { StartFunc };