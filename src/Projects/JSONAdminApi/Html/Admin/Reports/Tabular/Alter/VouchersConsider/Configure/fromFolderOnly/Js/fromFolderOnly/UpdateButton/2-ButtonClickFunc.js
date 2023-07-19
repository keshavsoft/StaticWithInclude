import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";
// import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalPreparePostData = await StartFuncPreparePostData({ CurrentTarget: jVarLocalCurrentTarget });
        StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData });
        // StartFuncAfterFetchFunc({ inResponse: jFLocalFromFetch, CurrentTarget: jVarLocalCurrentTarget });
    };
};

export { StartFunc };