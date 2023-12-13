import { StartFunc as StartFuncAdminData } from "../../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncShowData } from "./ShowOnDom/ShowData.js";

let StartFunc = async () => {
    let PromiseData = await StartFuncAdminData();

    if (PromiseData) {
        await StartFuncShowData();

        StartFuncAddListeners();

    };
};

StartFunc().then();
