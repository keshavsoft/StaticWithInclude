import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";

let StartFunc = ({ inProjectName }) => {

    if (StartFuncCheckBeforeFetch) {
        let jVarLocalPreparePostData = StartFuncPreparePostData();
        StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData, inProjectName });

    };
};

export { StartFunc };