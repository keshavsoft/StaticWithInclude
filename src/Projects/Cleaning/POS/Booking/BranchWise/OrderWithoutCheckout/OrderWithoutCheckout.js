import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncToStaticDomAddListenerFuncs } from "./ToStaticDom/AddListenerFuncs/StartFunc.js";

let StartFunc = () => {
    StartFuncToStaticDomAddListenerFuncs();
    StartFuncFormLoad();
    StartFuncAddListeners();
};

StartFunc();
