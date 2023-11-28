import { StartFunc as StartFuncCheckLogin } from "./Check/Entry.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

let StartFunc = ({ inFormLoadFuncToRun, inSuccessSuccess }) => {
    StartFuncAddlisteners({ inFormLoadFuncToRun });
    let jVarLocalFromCheck = StartFuncCheckLogin({ inSuccessSuccess });

    return jVarLocalFromCheck;
};

export { StartFunc };
