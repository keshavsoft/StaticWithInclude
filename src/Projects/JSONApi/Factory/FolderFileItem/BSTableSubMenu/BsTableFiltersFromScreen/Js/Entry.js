import { StartFunc as StartFuncReportButtonId } from "./AddListeners/ReportButtonId/EntryFile.js";
import { StartFunc as StartFuncFilterDataId } from "./AddListeners/FilterDataId/EntryFile.js";
import { StartFunc as StartFuncImmuteShowButtonId } from "./AddListeners/ImmuteShowButtonId/EntryFile.js";
import { StartFunc as StartFuncDelete } from "./AddListeners/Delete/Entry.js";

let StartFunc = async () => {
    StartFuncReportButtonId().then(async () => {
        StartFuncImmuteShowButtonId();
        StartFuncFilterDataId().then(() => StartFuncDelete());



    })
};

export { StartFunc };