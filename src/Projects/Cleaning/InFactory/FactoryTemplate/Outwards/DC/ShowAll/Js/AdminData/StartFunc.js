import { StartFunc as StartFuncCheckLogin } from "./Check/Entry.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

let StartFunc = ({inFormLoadFuncToRun}) => {
console.log("lofg");
    StartFuncAddlisteners({inFormLoadFuncToRun});
    let jVarLocalFromCheck = StartFuncCheckLogin();

    return jVarLocalFromCheck;
};

export { StartFunc };
