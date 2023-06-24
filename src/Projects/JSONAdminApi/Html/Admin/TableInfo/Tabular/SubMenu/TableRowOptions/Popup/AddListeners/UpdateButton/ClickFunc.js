import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncFetchPatch } from "./FetchPatch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarLocalFetchBody = StartFuncPreparePostData({ inCurrentTarget: jVarLocalCurrentTarget });

    let response = await StartFuncFetchPatch({ inFetchBody: jVarLocalFetchBody });

    StartFuncAfterFetch({ inCurrentTarget: jVarLocalCurrentTarget, inResponse: response });
};

export { StartFunc };