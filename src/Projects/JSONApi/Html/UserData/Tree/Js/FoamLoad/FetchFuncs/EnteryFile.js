import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {

    let response = await StartFuncFetchFunc();
    StartFuncAfterFetch({ inFromFetch: response });
};

export { StartFunc };