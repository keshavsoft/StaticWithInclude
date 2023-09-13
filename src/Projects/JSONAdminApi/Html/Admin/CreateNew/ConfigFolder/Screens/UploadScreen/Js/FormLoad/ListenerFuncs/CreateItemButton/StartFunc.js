import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = await StartFuncPreparePostData({ inEvent });
        console.log("jVarLocalBodyData:::",jVarLocalBodyData);

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        // StartFuncPostFetch({
        //     inFromFetch: response,
        //     inBodyData: jVarLocalBodyData,
        //     currentTarget:jVarLocalCurrentTarget
        // });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="screenName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="slectFile"]');
    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    if (jVarLocalFileNameValue === "" && jVarLocalItemNameValue === "") {
        jVarLocalFileName.classList.add("is-invalid");
        jVarLocalItemName.classList.add("is-invalid");
        jVarLocalItemName.focus();
        return false;
    };

    return true;
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/InsertNew`;

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