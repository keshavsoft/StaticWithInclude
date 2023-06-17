import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        StartFuncPostFetch({
            inFromFetch: response,
            inBodyData: jVarLocalBodyData,
            inCurrentTarget: jVarLocalCurrentTarget
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="ColumnName"]');
    let jVarLocaldiv = jVarLocalColsestTr.querySelector('.invalid-feedback');

    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    if (jVarLocalColumnNameValue === "") {
        jVarLocalColumnName.classList.add("is-invalid");
        jVarLocaldiv.innerHTML = "Should not be empty!"

        jVarLocalColumnName.focus();
        return false;
    };

    return true;
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/CreateNew/CreateNew`;

    let jFetchBody = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    };

    let response = await fetch(jFetchUrl, jFetchBody);

    // if (response.status === 200) {
    //     return await response.json();
    // };
    return await response
};

export { StartFunc };