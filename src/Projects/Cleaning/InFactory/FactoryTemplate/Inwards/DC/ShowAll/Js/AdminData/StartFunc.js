import { StartFunc as StartFuncCheckLogin } from "./Check/Entry.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

let StartFunc = ({ inFormLoadFuncToRun, inSuccessWarning }) => {
    StartFuncAddlisteners({ inFormLoadFuncToRun });
    let jVarLocalFromCheck = StartFuncCheckLogin({ inSuccessWarning });

    return jVarLocalFromCheck;
};

export { StartFunc };
