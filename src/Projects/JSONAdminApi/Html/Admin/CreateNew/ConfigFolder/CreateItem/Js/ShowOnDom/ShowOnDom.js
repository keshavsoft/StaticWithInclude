import { StartFunc as StartFuncApplyClasses } from "./ApplyClasses.js";

let jFCreateFoldersToDom = async ({ inProjectName }) => {
    let jVarLocalRoute = inProjectName;
    
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/CreateNew/CreateItem`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        jVarGlobalPresentViewData = dataFromApi;

        StartFuncApplyClasses({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }