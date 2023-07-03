import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";
import { StartFunc as StartFuncBeforeFetch } from "./BeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarClosestCard = jVarLocalCurrentTarget.closest(".tab-pane");
    let jVarLocalHtmlCardBody = jVarClosestCard.querySelector(".TabPaneKCont1");

    let jVarLocalReportName = StartFuncBeforeFetch({ inCurrentTarget: jVarLocalCurrentTarget });

    let jVarLocalFetchData = await StartFuncGetFetch({ inReportName: jVarLocalReportName });

    StartFuncAfterFetch({
        inFetchData: jVarLocalFetchData,
        inHtmlCardBody: jVarLocalHtmlCardBody
    });
};

export { StartFunc };