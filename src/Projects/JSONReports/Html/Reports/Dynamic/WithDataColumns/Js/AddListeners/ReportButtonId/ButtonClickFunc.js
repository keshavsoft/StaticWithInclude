import { StartFunc as StartFuncPrepareFetchUrl } from './PrepareFetchUrl.js'
import { StartFunc as StartFuncFetchFunc } from './FetchFunc.js'
// import { StartFunc as StartFuncAfterFetch } from './AfterFetch.js'
import { StartFunc as StartFuncAfterFetch } from './AfterFetch/EntryFile.js'

let StartFunc = async () => {
    let jVarLocalHtmlId = 'ReportButtonShowProcessId';
    let jVarLocalReportButtonShowProcessId = document.getElementById(jVarLocalHtmlId);
    jVarLocalReportButtonShowProcessId.style.display = "";

    let jVarLocalFetchUrl = StartFuncPrepareFetchUrl(event);


    let LocalResponseAsJson = await StartFuncFetchFunc({ inFetchUrl: jVarLocalFetchUrl });

    StartFuncAfterFetch({ inResponseAsJson: LocalResponseAsJson });

    jVarLocalReportButtonShowProcessId.style.display = "none";
};

export { StartFunc }