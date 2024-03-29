import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

import ApiConfigJson from "../../../../ApiConfig.json" assert { type: "json" };

let StartFunc = async ({ inPk }) => {
    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalBodyData = StartFuncPreparePostData({ inPk });

        let response = await StartFuncFetchFunc({ inBodyData: jVarLocalBodyData });

        await StartFuncAfterFetch({
            inFromFetch: response, inPk,
            inBranchName: ApiConfigJson.BranchName
        });
    };
};

export { StartFunc };