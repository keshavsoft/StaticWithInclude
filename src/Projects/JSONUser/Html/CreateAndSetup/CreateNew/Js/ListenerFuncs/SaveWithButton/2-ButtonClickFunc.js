import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";

let StartFunc = ({inSubRoute}) => {
    let jVarLocalPreparePostData = StartFuncPreparePostData();

    if (StartFuncCheckBeforeFetch({ PreparePostData: jVarLocalPreparePostData })) {
        StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData,inSubRoute });

    };
};

export { StartFunc };