let StartFunc = async ({ inEvent, inProjectName }) => {
    if (jFLocalCheckBeforeFetch()) {
        let jVarLocalBodyData = jFLocalPreparePostData();
        let jVarLocalFolderName = jVarLocalBodyData.NewFolderName;

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        jFLocalPostFetch({
            inFromFetch: response,
            inNewFolderName: jVarLocalFolderName
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

let jFLocalPostFetch = ({ inFromFetch, inNewFolderName }) => {
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

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/CreateNew/CreateFolder`;

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