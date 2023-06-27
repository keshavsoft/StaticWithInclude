import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPatchFetch } from "./PatchFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarLocalPostData = StartFuncPreparePostData({ inCurrentTarget: jVarLocalCurrentTarget });
    let jVarLocalResponse = await StartFuncPatchFetch({ inFetchBody: jVarLocalPostData });
    StartFuncAfterFetch({ inResponse: jVarLocalResponse, inCurrentTarget: jVarLocalCurrentTarget });
};

export { StartFunc };