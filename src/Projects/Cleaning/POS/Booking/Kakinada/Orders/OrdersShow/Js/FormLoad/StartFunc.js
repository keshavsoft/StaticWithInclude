import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
};

export { StartFunc };
