import { StartFunc as StartFuncFoamLoad } from "./FoamLoad/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFoamLoad();
    };
};
StartFunc();