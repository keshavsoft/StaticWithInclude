import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = jFLocalPreparePostData({ inEvent });
        let jVarLocalFileName = jVarLocalBodyData.NewFileName;
        jVarLocalBodyData.FolderName = jVarLocalFolderName;

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        StartFuncPostFetch({
            inFromFetch: response,
            inNewFolderName: jVarLocalFolderName,
            inNewFileName: jVarLocalFileName
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalHtmlId = "CreateFileInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalFileNameValue = jVarLocalFileName.value;


    if (jVarLocalFileNameValue === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    return true;
};

let jFLocalPreparePostData = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');

    let jVarLocalFileNameValue = jVarLocalFileName.value.trim();

    return {
        NewFileName: jVarLocalFileNameValue
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/CreateNew/CreateFile`;
    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    }

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };