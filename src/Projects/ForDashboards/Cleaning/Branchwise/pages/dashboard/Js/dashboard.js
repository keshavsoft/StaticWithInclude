import { StartFunc as StartFuncFoamLoad } from "./FormLoad/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFoamLoad();
    };
};
StartFunc();