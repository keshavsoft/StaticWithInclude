import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        StartFuncPostFetch({
            inFromFetch: response,
            inBodyData: jVarLocalBodyData
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalHtmlId = "CreateFileInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    if (jVarLocalFileNameValue === "") {
        jVarLocalFileName.classList.add("is-invalid");
        jVarLocalFileName.focus();
        return false;
    };

    return true;
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    //let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem`;
   // POST  http://localhost:4131/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/CreateNew/CreateItem`;

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