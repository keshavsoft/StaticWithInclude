import { StartFunc as StartFuncFoamLoad } from "./Js/FoamLoad/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFoamLoad();
    };
};
StartFunc();