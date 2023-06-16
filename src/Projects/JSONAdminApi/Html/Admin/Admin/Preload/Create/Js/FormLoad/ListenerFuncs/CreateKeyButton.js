let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch();
    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = jFLocalPreparePostData();
        let jVarLocalFolderName = jVarLocalBodyData.inNewKeyName;

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
    let jVarLocalHtmlId = "CreateInputId";
    let jVarCreateKeyInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalkeyName = jVarCreateKeyInputId.value;

    if (jVarLocalkeyName === "") {
        jVarCreateKeyInputId.classList.add("is-invalid");
        jVarCreateKeyInputId.focus();
        return false;
    };

    return true;
};

let jFLocalPostFetch = ({ inFromFetch, inNewFolderName }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inNewFolderName });
    };
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inNewFolderName }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    let jVarLocalFromConfig = inFromFetch.find(element => {
        return element.ConfigFolderCreated
    });

    if (jVarLocalFromConfig === undefined === false) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    let jVarLocalFromData = inFromFetch.find(element => {
        return element.DataFolderCreated
    });

    if (jVarLocalFromData === undefined === false) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
    };

    let jVarLocalAnyCreated = inFromFetch.filter(element => {
        return element.KTF
    });

    if (jVarLocalAnyCreated.length > 0) {
        myUrlWithParams.searchParams.append("NewFolderName", inNewFolderName);
        window.location.href = myUrlWithParams.href;
    };
};

let jFLocalPreparePostData = () => {
    let jVarLocalHtmlId = "CreateInputId";
    let jVarCreateKeyInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalKeyName = jVarCreateKeyInputId.value.trim();

    return {
        inNewKeyName: jVarLocalKeyName
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/CreateNew/InsertKey`;
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