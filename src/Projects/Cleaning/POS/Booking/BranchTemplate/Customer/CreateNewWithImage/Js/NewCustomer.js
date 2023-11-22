import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncAddlisteners();

    };
};

StartFunc();