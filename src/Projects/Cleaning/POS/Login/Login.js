import { StartFunc as StartFuncFormLoad } from "./FormLoad/EntryFile.js";
import { StartFunc as StartFuncButtonClicks } from "./Js/ListenerFuncs/StartFunc.js";

let StartFunc = async () => {
    StartFuncFormLoad();

    StartFuncButtonClicks();
};

StartFunc().then();