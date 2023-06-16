let jFCreateFoldersToDom = async ({ inProjectName }) => {
    let jVarLocalRoute = inProjectName;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/CreateNew/InsertKey`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    let localdataFromApi = dataFromApi.JsonData;

    if (dataFromApi !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForPreload").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localdataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }