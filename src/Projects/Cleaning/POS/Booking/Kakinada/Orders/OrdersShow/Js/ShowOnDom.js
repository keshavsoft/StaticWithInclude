import { StartFunc as StartFuncButtonClickFunc } from "./FetchFuncs/FromServer/OrdersData/2-ButtonClickFunc.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncButtonClickFunc();

    if (jVarLocalDataNeeded !== null) {
    };
};

export { StartFunc }