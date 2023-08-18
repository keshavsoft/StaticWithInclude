import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
// import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then(() => {
            StartFuncAddListeners();
        });
    };
};

StartFunc();