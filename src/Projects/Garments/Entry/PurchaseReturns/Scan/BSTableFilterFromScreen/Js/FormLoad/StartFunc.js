import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncEntry } from "./Addlisteners/Entry.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
    StartFuncEntry();

};

export { StartFunc };
