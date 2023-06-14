import { StartFunc as StartFuncApplyClasses } from "./ApplyClasses.js";

let StartFunc = async ({ inProjectName }) => {
    let jVarLocalRoute = inProjectName;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/JsonConfigKey`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    let localJsonData = dataFromApi.JsonData;

    if (localJsonData !== null) {
        // jVarGlobalPresentViewData = dataFromApi;

        StartFuncApplyClasses({ inDataFromApi: localJsonData });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForPreload").innerHTML;
        document.getElementById("KtBody").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localJsonData);
    };

    return await dataFromApi;
};

export { StartFunc };