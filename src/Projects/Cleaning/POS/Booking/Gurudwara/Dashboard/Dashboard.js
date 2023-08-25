import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
// import { StartFunc as StartFuncAdminData } from "../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "../../../../AdminData/StartFunc.js";

const StartFunc = async () => {
    let jVarLocalFromAdmin = StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
        StartFuncAddListeners();
    };
};

StartFunc().then();