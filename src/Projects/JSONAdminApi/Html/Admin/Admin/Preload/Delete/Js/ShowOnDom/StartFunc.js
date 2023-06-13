import { StartFunc as StartFuncApplyClasses } from "./ApplyClasses.js";

let StartFunc = async ({ inProjectName }) => {
    let jVarLocalRoute = inProjectName;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/Delete`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    let localJsonData = dataFromApi.JsonData;

    if (localJsonData !== null) {
        // jVarGlobalPresentViewData = dataFromApi;

        StartFuncApplyClasses({ inDataFromApi: localJsonData });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localJsonData);
    };

    return await localJsonData;
};

export { StartFunc };