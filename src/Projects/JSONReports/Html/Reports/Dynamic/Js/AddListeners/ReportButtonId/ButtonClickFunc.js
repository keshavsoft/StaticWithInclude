import { StartFunc as StartFuncPrepareFetchUrl } from './PrepareFetchUrl.js'
import { StartFunc as StartFuncFetchFunc } from './FetchFunc.js'
import { StartFunc as StartFuncAfterFetch } from './AfterFetch.js'

let StartFunc = async () => {
    let jVarLocalFetchUrl = StartFuncPrepareFetchUrl(event);

    let LocalResponseAsJson = await StartFuncFetchFunc({ inFetchUrl: jVarLocalFetchUrl });
    StartFuncAfterFetch({ inResponseAsJson: LocalResponseAsJson });
};

export { StartFunc }