import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    console.log("kkkkkkkkkkkkk");
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    
};

export { StartFunc }