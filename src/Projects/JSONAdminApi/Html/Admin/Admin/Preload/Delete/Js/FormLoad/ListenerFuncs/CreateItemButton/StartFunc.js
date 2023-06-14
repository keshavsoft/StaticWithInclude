// import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.preloadkey;

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalFolderName,
            inProjectName
        });

        StartFuncPostFetch({
            inFromFetch: response,
            inBodyData: jVarLocalBodyData
        });
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="CloneName"]');
    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    if (jVarLocalColumnNameValue === "") {
        jVarLocalColumnName.classList.add("is-invalid");
        jVarLocalColumnName.focus();
        return false;
    };

    return true;
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/Delete`;

    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    };

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };