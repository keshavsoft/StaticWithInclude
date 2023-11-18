import { StartFunc as StartFuncTotalCount } from "./TotalCount/EntryFile.js";
import { StartFunc as StartFuncBsTable } from "./BsTable/EntryFile.js";

let StartFunc = async () => {

    StartFuncTotalCount();
    StartFuncBsTable();
};

export { StartFunc };