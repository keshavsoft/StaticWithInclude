// import { StartFunc as StartFuncFetchFuncs } from "./GetFetcFunc.js";
// import { StartFunc as StartFuncButtonClickFunc } from "../AfterFetchFuncs/ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

import { StartFunc as StartFuncAfterFetch } from "../AfterFetchFuncs/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncButtonClickFunc();
    console.log("jVarLocalDataNeeded::", jVarLocalDataNeeded);

    if (jVarLocalDataNeeded !== null) {
        await StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    };
};

export { StartFunc }