import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";

let StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarLocalPreparePostData = StartFuncPreparePostData({ CurrentTarget: jVarLocalCurrentTarget });

    if (StartFuncCheckBeforeFetch()) {
        StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData });

    };
};

export { StartFunc };