import { StartFunc as StartFuncBranchAndQrCodes } from "./BranchAndQrCodes/EntryFile.js";
import { StartFunc as StartFuncDcDetailsTable } from "./DcDetailsTable/EntryFile.js";

let StartFunc = () =>{

    StartFuncBranchAndQrCodes();
    StartFuncDcDetailsTable();
    
};

export { StartFunc };