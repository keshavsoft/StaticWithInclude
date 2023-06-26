import {StartFunc as StartFuncAfterFetchFunc  } from "./AfterFetchFunc.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    if (jFLocalCheckBeforeFetch()) {
        let jVarLocalBodyData = jFLocalPreparePostData();

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        StartFuncAfterFetchFunc({
            inFromFetch: response
        });
    };
};

let jFLocalCheckBeforeFetch = () => {
    let jVarLocalHtmlId = "CreateReportInputId";
    let jVarCreateInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalInputName = jVarCreateInputId.value;

    if (jVarLocalInputName === "") {
        jVarCreateInputId.classList.add("is-invalid");
        jVarCreateInputId.focus();
        return false;
    };

    return true;
};

let jFLocalPreparePostData = () => {
    let jVarLocalHtmlId = "CreateReportInputId";
    let jVarCreateInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalInputName = jVarCreateInputId.value.trim();

    return {
        NewReportName: jVarLocalInputName
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromKeys/InsertKey`;

    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    }

    let response = await fetch(jFetchUrl, jFetchBody);

    return await response;
};

export { StartFunc };