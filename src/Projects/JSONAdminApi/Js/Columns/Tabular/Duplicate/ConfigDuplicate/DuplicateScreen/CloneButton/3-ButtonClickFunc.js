import { StartFunc as StartFuncPreparePostData } from "./2-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./4-CheckBeforeFetch.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";
import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalPreparePostData = await StartFuncPreparePostData({ inevent });
        console.log("jVarLocalPreparePostData : ", jVarLocalPreparePostData);
        let jFLocalFromFetch = await StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData });

        StartFuncAfterFetchFunc({ inResponse: jFLocalFromFetch });
    };
};

export { StartFunc };